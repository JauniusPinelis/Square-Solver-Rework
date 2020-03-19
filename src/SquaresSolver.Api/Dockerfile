FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 5000

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src
COPY ["src/SquaresSolver.Api/SquaresSolver.Api.csproj", "src/SquaresSolver.Api/"]
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
