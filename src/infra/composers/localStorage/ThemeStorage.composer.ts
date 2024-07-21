import { ThemeStorageHandler } from "@domain/contexts/theme/ThemeStorageHandler";
import { StorageService } from "../../localStorage/Storage.service";

const ThemeStorageHandlerComposer = new ThemeStorageHandler(new StorageService());
export { ThemeStorageHandlerComposer };
