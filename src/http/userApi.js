import { $host } from '.';


export const createRequest = async (user) => {
    const responce = await $host.post("api/users", user)
    return responce;
}
export const getAllRequest = async () => {
    const {data} = await $host.get("api/users")
    return data;
}