// HELPERS
import { popularData } from "./Helpers/Constants";

export type NativeStackParamList = {
	Home: undefined;
	Details: typeof popularData[0];
};
