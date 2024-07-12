import { ThemeStorageHandler } from "@domain/contexts/theme/ThemeStorageHandler";
import { StorageService } from "../../services/Storage.service";

const ThemeStorageHandlerComposer = new ThemeStorageHandler(new StorageService());
export { ThemeStorageHandlerComposer };
