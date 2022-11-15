using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities;

public class Update
{
    public class Command :IRequest{
        public Activity? Activity { get; set; }
    }
    public class Handler : IRequestHandler<Command>
    {
        private readonly DataContext _context;
        public Handler(DataContext context)
        {
            _context = context;
        }
        public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await _context.Activities.FindAsync(request.Activity?.Id, cancellationToken);
            
            await _context.SaveChangesAsync();
            return Unit.Value;
        }
    }
}
