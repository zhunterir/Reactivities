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
    public async Task<ActionResult<List<Activity>>> GetActivities(CancellationToken cancellationToken)
    {
       return await Mediator.Send(new List.Query(), cancellationToken);
    }
    [HttpGet("{id:guid}")]
    public async Task<ActionResult<Activity>> GetActivity(Guid id, CancellationToken cancellationToken)
    {
        return await Mediator.Send(new Details.Query(id), cancellationToken);
    }

    [HttpPost]
    public async Task<ActionResult> CreateActivity(Activity activity, CancellationToken cancellationToken){
        return Ok(await Mediator.Send(new Create.Command(){Activity = activity}, cancellationToken));
    }

    [HttpPut]
    public async Task<ActionResult> UpdateActivity(Guid id, Activity activity, CancellationToken cancellationToken){
        activity.Id = id;
        return Ok(await Mediator.Send(new Update.Command(){Activity = activity}, cancellationToken));
    }

    [HttpDelete]
    public async Task<ActionResult> DeleteActivity(Guid id , CancellationToken cancellationToken){
        return Ok(await Mediator.Send(new Delete.Command(){Id = id},  cancellationToken));
    }
}