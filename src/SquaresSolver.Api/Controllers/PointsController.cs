using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SquaresSolver.Application;
using SquaresSolver.Application.Points;
using SquaresSolver.Database;

namespace SquaresSolver.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PointsController : ControllerBase
    {
        private readonly DataContext _ctx;

        public PointsController(DataContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet]
        public async Task<ActionResult> GetPoints() 
            => Ok(await new GetPoints(_ctx).Do());

        [HttpPost]
        public async Task<ActionResult> PostPoint([FromBody]AddPoint.Request request) 
            => Ok(await new AddPoint(_ctx).Do(request));

        [HttpDelete]
        public async Task<ActionResult> DeletePoint(DeletePoint.Request request)
            => Ok(await new DeletePoint(_ctx).Do(request));
    }
}
