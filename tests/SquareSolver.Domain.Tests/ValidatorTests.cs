using FluentAssertions;
using NUnit.Framework;
using SquaresSolver.Domain;
using SquaresSolver.Domain.Models;
using System.Collections.Generic;

namespace SquareSolver.Domain.Tests
{
    public class ValidatorTests
    {

        [Test]
        public void Validate_Given_EmptyIntialList_ValidateIsSuccessfull()
        {
            var points = new List<PointModel>();
            var validator = new Validator(points);
            var point = new PointModel()
            {
                X = 1,
                Y = 2
            };

            var output = validator.Validate(point);

            output.Successfull.Should().BeTrue();
        }
    }
}