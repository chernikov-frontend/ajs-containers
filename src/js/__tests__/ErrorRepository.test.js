import ErrorRepository from "../ErrorRepository";

test('Ошибка выводится корректно', () => {

    const errorRepository = new ErrorRepository();

    expect(errorRepository.translate(404)).toBe('Not Found')
});

test('Ошибка не найдена в хранилище', () => {

    const errorRepository = new ErrorRepository();

    expect(errorRepository.translate(111)).toBe('Unknown Error')
});