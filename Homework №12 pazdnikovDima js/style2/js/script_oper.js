let  last_name= prompt('Введите вашу Фамилию')

let first_name = prompt('Введите ваше Имя')

let middl_name = prompt('Введите ваше Отчество')

let years = prompt('Сколько вам лет')

let sex = confirm('Ваш пол - мужской?')

sex ? sex = 'мужской' : sex = 'женский'

years<55 ? pension = 'нет' : pension = 'да'

alert(`   
        Ваше ФИО: ${last_name}  ${first_name}  ${middl_name}
        Ваш возраст в годах:  ${Number(years)}
        Ваш возраст в днях:  ${Number(years)*365}
        Через 5 лет вам будет:  ${Number(years)+5}
        Ваш пол: ${sex}
        Вы на песнии:  ${pension}`
)