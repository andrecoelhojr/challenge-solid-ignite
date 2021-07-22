import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      const userAdm = this.turnUserAdminUseCase.execute({ user_id });

      return response.json(userAdm);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { TurnUserAdminController };
