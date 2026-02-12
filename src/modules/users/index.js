import controller from "./users.controller.js";
import model from "./users.model.js";
import service from "./users.service.js";
import routes from "./users.routes.js";

const usersModel = model;
const usersService = new service(usersModel);
const usersController = new controller(usersService);

export const UsersModule = {
    model: usersModel,
    service: usersService,
    controller: usersController,
    routes: routes
};
