using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
       return await Mediator.Send(new List.Query());
    }
    [HttpGet("{id:guid}")]
    public async Task<ActionResult<Activity>> GetActivity(Guid id)
    {
        return await Mediator.Send(new Details.Query(id));
    }

    [HttpPost]
    public async Task<ActionResult> CreateActivity(Activity activity){
        return Ok(await Mediator.Send(new Create.Command(){Activity = activity}));
    }

    [HttpPut]
    public async Task<ActionResult> UpdateActivity(Guid id, Activity activity){
        activity.Id = id;
        return Ok(await Mediator.Send(new Update.Command(){Activity = activity}));
    }

    [HttpDelete]
    public async Task<ActionResult> DeleteActivity(Guid id ){
        return Ok(await Mediator.Send(new Delete.Command(){Id = id}));
    }
}