import { CHANGE_ROLE } from "../types";

export const changeRole = (role: string) => ({
    type: CHANGE_ROLE,
    payload: role,
})