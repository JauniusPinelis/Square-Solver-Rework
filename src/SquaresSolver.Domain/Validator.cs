using SquaresSolver.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SquaresSolver.Domain
{
    public class Validator
    {
       public List<PointModel> Points { get; set; } = new List<PointModel>();

       public ValidationMessage Validate(PointModel point)
       {
            if (point.X > 1000 || point.X < -1000 || point.Y > 1000 || point.Y < -100)
            {
                return new ValidationMessage()
                {
                    Successfull = false,
                    Message = "Out of range"
                };
            }  

            return new ValidationMessage()
            {
                Successfull = true,
                Message = "Point has been added"
            };
       }
    }
}
