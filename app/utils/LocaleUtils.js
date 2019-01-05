import { Platform, NativeModules } from 'react-native'
import _ from "lodash";

export default class LocaleUtils {
    static getUsersLocale() {
        if (Platform.OS === 'ios') return NativeModules.SettingsManager.settings.AppleLocale.substring(0, 2);
        if (Platform.OS === 'android') return NativeModules.I18nManager.localeIdentifier.substring(0, 2);
    }

    static getUsersLocaleSafe(availableLocales, fallbackLocale) {
        let userLocale = this.getUsersLocale();
        if (availableLocales.contains(userLocale)) {
            return userLocale;
        } else {
            return fallbackLocale;
        }
    }

    static getUsersLocaleFallback() {
        let userLocale = this.getUsersLocale();
        if (_.includes(this.getAvailableLocales(), userLocale)) {
            return userLocale;
        } else {
            return this.getFallbackLocale();
        }
    }

    static getFallbackLocale() {
        return "en";
    }

    static getAvailableLocales() {
        return ["en", "cs"];
    }
}