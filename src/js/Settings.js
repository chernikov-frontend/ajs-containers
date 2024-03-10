export default class Settings {
    constructor(){
        this.settingsDefault = new Map()
    
        this.settingsDefault.set('theme', 'dark')
        this.settingsDefault.set('music', 'trance')
        this.settingsDefault.set('difficulty', 'easy')
    
        this.userSettings = new Map() 
    }

    newSettings(tuning, value) {

// проверка настройки 'theme'
        if(tuning === 'theme') {
        if(value === 'light' || value === 'dark' || value === 'gray') {
            this.userSettings.set(tuning, value);
        } else {
            throw new Error('Нет такого значения темы!');
            } 
        } 
// проверка настройки 'music'
        else if (tuning === 'music') {
            if(value === 'pop' || value === 'rock' || value === 'chillout' || value === 'off') {
            this.userSettings.set(tuning, value);
        } else {
            throw new Error('Нет такого значения музыки!');
            } 
        } 
// проверка настройки 'difficulty'
        else if (tuning === 'difficulty') {
            if(value === 'normal' || value === 'hard' || value === 'nightmare') {
            this.userSettings.set(tuning, value);
        } else {
            throw new Error('Нет такого значения сложности!');
            } 
        } 
        
        else {
            throw new Error('Не существующая настройка!');
        }
// замена дефолных настроек на пользовательские
        this.settingsDefault.set(tuning, this.userSettings.get(tuning))
    }

}