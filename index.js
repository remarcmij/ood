let app = {}

(function(app) {

    class BaseItem {
        constructor(args) {
            this.attributes = args || { name: '' }
            this.attributes.brings = []
            this.attributes.owner = null
        }
    }

    // Person
    // This is a generic person to rapresent the participants
    class Person extends BaseItem {

        static isPerson(obj) {
            return !(obj instanceof Person)
        }

        brings(ingredients) {
            if (typeof ingredients === "object") {
                Object.keys(ingredients, nane => this.attributes.brings.push(ingredients[name]))
            } else {
                this.attributes.brings.push(ingredients)
            }
        }
    }

    function somethingExceptPerson(person) {
        return !(person instanceof app.Person)
    }
    app.Person = Person

    class Meal extends BaseItem {
        constructor(args) {
            super(args)
            this.attributes.participants = []
            this.attributes.guests = []
        }
        _addParticipant(person) {
            if (!Person.isPersons(person)) {
                throw new Error('You should pass a Person to add a Participant')
            }
            person.type = person.type || "guest"
            this.attributes.participants.push(person)
        }

        addGuest(person) {
            person.attributes.type = 'guest'
            this._addParticipant(person)
            this.attributes.guests.push(person)
        }

        addOwner(person) {
            person.attributes.type = 'owner'
            this._addParticipant(person)
            this.attributes.owner = person
        }
    }

    app.Person = Person
    app.Meal = Meal
    app.Ingredient = BaseItem
    app.Manipulation = BaseItem
    app.Recipe = BaseItem

    let dinners = require('./src/dinners')
    let last_dinner = dinners[(dinners.length - 1)]
    let Utils = require('./src/utils')

    Utils.render(last_dinner)

})(app)