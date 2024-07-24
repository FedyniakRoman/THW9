// 1. В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте. Создайте новый класс Users, который наследуется от класса Permissions. Дополнительно в классе Users добавьте свойство name, значение которого класс принимает в качестве аргумента конструктора.

class Permissions {
    constructor() {
        this.create = false;
        this.read = true;
        this.update = false;
        this.remove = false;
    }
}

class Users extends Permissions {
    constructor(name) {
        super();
        this.name = name; 
    }
}


// 2. Создайте класс Object2. в котором будет определен статический метод entries().
// Метод должен будет получить в качестве аргумента объект и вернуть результат, аналогичный результату работы метода Object.entries(). 
// В решении использовать методы объекта Object нельзя.

// * Доп задание 
// К данному классу добавьте метод asign(), который будет реализован по такому же принципу, как вышеуказанный метод. Перед выполнением необходимо разобраться в особенностях работы метода.


class Object2 {
    static entries(obj) {
        const result = [];
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) { 
                result.push([key, obj[key]]);
            }
        }
        return result;
    }

    static assign(target, ...sources) {
        for (let i = 0; i < sources.length; i++) {
            let nextSource = sources[i];
            for (let key in nextSource) {
                if (nextSource.hasOwnProperty(key)) { 
                    target[key] = nextSource[key];
                }
            }
        }
        return target;
    }
}


// 3. Задача: Пользователи и Премиум-пользователи
// Создайте систему классов для управления пользователями и премиум-пользователями с различными функциями.

//   Требования к классу User
//     1:  Свойства класса User:
//         username (строка): Имя пользователя.
//         email (строка): Электронная почта пользователя.
//         isLoggedIn (логическое значение): Флаг, указывающий, что пользователь вошел в систему. Изначально false.

//     2: Методы класса User:
//         login(): Метод должен установить isLoggedIn в true и возвращать строку "User <имя пользователя> logged in".
//         logout(): Метод должен установить isLoggedIn в false и возвращать строку "User <имя пользователя> logged out".
//         updateEmail(newEmail): Метод должен обновить email пользователя на newEmail и возвращать строку "User <имя пользователя> updated email to <новый email>".

//  Требования к классу PremiumUser
//         1:  Свойства класса PremiumUser:
//             Должен наследовать все свойства класса User.
//             subscriptionEndDate (объект Date): Дата окончания подписки премиум-пользователя.

//         2: Методы класса PremiumUser:
//               Должен наследовать все методы класса User.
//               accessPremiumContent(): Метод должен возвращать строку "Accessing premium content for user <имя пользователя>".
//               extendSubscription(days): Метод должен принимать количество дней (days), добавлять эти дни к subscriptionEndDate и возвращать строку "Subscription extended by <days> days".
//               viewSubscriptionStatus(): Метод должен возвращать строку "Subscription for user <имя пользователя> ends on <дата окончания подписки>".


class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.isLoggedIn = false;
    }

    login() {
        this.isLoggedIn = true;
        return `User ${this.username} logged in`;
    }

    logout() {
        this.isLoggedIn = false;
        return `User ${this.username} logged out`;
    }

    updateEmail(newEmail) {
        this.email = newEmail;
        return `User ${this.username} updated email to ${newEmail}`;
    }
}

class PremiumUser extends User {
    constructor(username, email, subscriptionEndDate) {
        super(username, email);
        this.subscriptionEndDate = new Date(subscriptionEndDate);
    }

    accessPremiumContent() {
        return `Accessing premium content for user ${this.username}`;
    }

    extendSubscription(days) {
        this.subscriptionEndDate.setDate(this.subscriptionEndDate.getDate() + days);
        return `Subscription extended by ${days} days`;
    }

    viewSubscriptionStatus() {
        return `Subscription for user ${this.username} ends on ${this.subscriptionEndDate.toISOString().split('T')[0]}`;
    }
}

