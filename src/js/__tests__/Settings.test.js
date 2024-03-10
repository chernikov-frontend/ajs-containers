import Settings from '../Settings';


test.each([
    ['music', 'off'], 
    ['difficulty', 'nightmare'],
    ['theme', 'gray']
])('Пользователь изменил настройки успешно', (tuning, value) => {

    const settings = new Settings();
    settings.newSettings(tuning, value)
    const result = settings.settingsDefault.get(tuning);

    expect(result).toBe(value);
});

test('невозможно изменить не существующей настройки', () => {

    const settings = new Settings();

    expect(() => settings.newSettings('tuning', 'value')).toThrow('Не существующая настройка!');
});

test.each([
    ['music', 'on'], 
    ['difficulty', 'night'],
    ['theme', 'red']
])('невозможно изменить не существующего значения', (tuning, value) => {

    const settings = new Settings();

    expect(() => settings.newSettings(tuning, value)).toThrow();
});

