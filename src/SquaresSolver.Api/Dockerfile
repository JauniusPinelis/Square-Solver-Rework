FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["src/SquaresSolver.Api/SquaresSolver.Api.csproj", "src/SquaresSolver.Api/"]
COPY ["src/SquaresSolver.Application/SquaresSolver.Application.csproj", "src/SquaresSolver.Application/"]
COPY ["src/SquaresSolver.Domain/SquaresSolver.Domain.csproj", "src/SquaresSolver.Domain/"]
COPY ["src/SquaresSolver.Database/SquaresSolver.Database.csproj", "src/SquaresSolver.Database/"]
RUN dotnet restore "src/SquaresSolver.Api/SquaresSolver.Api.csproj"
COPY . .
WORKDIR "/src/src/SquaresSolver.Api"
RUN dotnet build "SquaresSolver.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SquaresSolver.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SquaresSolver.Api.dll"]
