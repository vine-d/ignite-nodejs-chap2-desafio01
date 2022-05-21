import { v4 as uuidV4 } from "uuid";

class User {
	id = uuidV4();
	name: string;
	admin: boolean = false;
	email: string;
	created_at: Date = new Date();
	updated_at: Date = new Date();
}

export { User };
