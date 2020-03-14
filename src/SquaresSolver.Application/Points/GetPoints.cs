using Microsoft.EntityFrameworkCore;
using SquaresSolver.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SquaresSolver.Application.Points
{
    public class GetPoints
    {
        private readonly DataContext _ctx;

        public GetPoints(DataContext ctx)
        {
            _ctx = ctx;
        }

        public async Task<IEnumerable<PointViewModel>> Do()
        {
            return await _ctx.Points.Select(p => new PointViewModel()
            {
               X = p.X,
               Y = p.Y
            }).ToListAsync();
        }

        public class PointViewModel
        {
            public int X { get; set; }
            public int Y { get; set; }
        }
    }
}
