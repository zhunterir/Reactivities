using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{
    private readonly DataContext _dbContext;

    public ActivitiesController(DataContext dbContext)
    {
        _dbContext = dbContext;
    }
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
        var result =  await _dbContext.Activities.ToListAsync();
        System.Console.WriteLine(result.Count);
        return result;
    }
    [HttpGet("{id:guid}")]
    public async Task<ActionResult<Activity>> GetActivity(Guid id)
    {
        return (await _dbContext.Activities.FindAsync(id))!;
    }

}