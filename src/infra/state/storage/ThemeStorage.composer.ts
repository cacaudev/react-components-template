import { ThemeStorageHandler } from "@domain/contexts/support/theme/ThemeStorageHandler";
import { StorageService } from "../../services/Storage.service";

const ThemeStorageHandlerComposer = new ThemeStorageHandler(new StorageService());
export { ThemeStorageHandlerComposer };
