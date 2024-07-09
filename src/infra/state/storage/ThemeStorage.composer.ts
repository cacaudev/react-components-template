import { ThemeStorageHandler } from "@domain/contexts/support/theme/ThemeStorageHandler";
import { StorageService } from "../../services/Storage.service";

const storageService = new StorageService();
const ThemeStorageHandlerComposer = new ThemeStorageHandler(storageService);
export { ThemeStorageHandlerComposer };
