let typeofpack = "express"

switch (typeofpack) {
    case "express":
        console.log("Your item will be delivered 3-5 days");
        break;
    case "standard":
        console.log("Your item will be delivered 1-2 days");
        break;
    case "overnight":
        console.log("Your item will be delivered overnight");
        break;
    default:
        console.log("Invalid package")
}