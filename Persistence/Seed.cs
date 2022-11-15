using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Persistence
{
    public static  class Seed
    {
        public static async Task SeedDataAsync(IServiceProvider serviceProvider){
            using var scope = serviceProvider.CreateScope();
            var services = scope.ServiceProvider;
            var context = services.GetRequiredService<DataContext>();
            try
            {
                await context.Database.MigrateAsync();
            }
            catch (System.Exception e)
            {
                var logger = services.GetRequiredService<ILogger>();
                logger.LogError(e, "an error occured during migration");
                throw;
            }
            if (!context.Activities.Any())
            {
                var activities = new List<Activity>
                {
                    new Activity()
                    {
                        Category = "Favorite",
                        City = "Tehran",
                        Date = DateTime.Now,
                        Description = "Sample Description 1",
                        Title = "Book about my favorites",
                        Venue = "Pub"
                    },
                    new Activity()
                    {
                        Category = "Drink",
                        City = "Tehran",
                        Date = DateTime.Now.AddDays(-1),
                        Description = "Sample Description 2",
                        Title = "How to make drinks",
                        Venue = "Pub"
                    }
                };
                await context.Activities.AddRangeAsync(activities);
                await context.SaveChangesAsync();
            }
        }
    }
}