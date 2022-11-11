
using Microsoft.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
                      policy  =>
                      {
                          policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                      });
});
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var connectionString = builder.Configuration.GetConnectionString("Default");
builder.Services.AddDbContext<DataContext>(opt => opt.UseSqlite(connectionString));
var app = builder.Build();
using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

try
{
    var dbContext = services.GetRequiredService<DataContext>();
    await dbContext.Database.MigrateAsync();
    await Seed.SeedDataAsync(dbContext);
}
catch (Exception e)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(e, "an error occured during migration");
    throw;
}
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
