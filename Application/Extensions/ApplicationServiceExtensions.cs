using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using MediatR;
using Application.Activities;
using Application.Core;

namespace Application.Extensions;

public static class ApplicationServiceExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration configs ){
        
        services.AddMediatR(typeof(List).Assembly);
        services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);

        return services;
    }
}
