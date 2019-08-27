class Screen extends Component {
  constructor (props) {
    super(props)
    this.state = { loginState: 'logged-out' }
  }

  render () {
    // …
  }
}

//////////////////
const adults = [], minors = []
people.forEach(function (person) {
  if (person.age >= 18) {
    adults.push(person)
  } else {
    minors.push(person)
  }
})

people.map(function (person) {
  return person.firstName
})

const adults = [], minors = []
people.forEach((person) => {
  if (person.age >= 18) {
    adults.push(person)
  } else {
    minors.push(person)
  }
})

people.map((person) => person.firstName)

//////////////////////////////////
const name = 'Extérieur'

const obj = {
  name: 'Intérieur',
  runGreet () {
    // Ici, this.name est bien "Intérieur"
    setTimeout(function () {
      // Ici, this est soit l’objet global (mode laxiste de JS),
      // soit null (mode strict de JS)
    }, 0)
  }
}

obj.runGreet()

const name = 'Extérieur'

const obj = {
  name: 'Intérieur',
  runGreet () {
    // Ici, this.name est bien "Intérieur"
    setTimeout(() => {
      // Ici, this n’est pas redéfini par la fonction,
      // car c’est une fonction fléchée : comme n’importe
      // quel identifiant, il est donc recherché dans les
      // portées englobantes, et trouvé au niveau de
      // runGreet, c’est donc aussi "Intérieur".
    }, 0)
  }
}

obj.runGreet()

///////////////////////////////////////////////////////
// À l'ancienne
const firstName = this.props.firstName
const lastName = this.props.lastName
const onClick = this.props.onClick

// Avec une déstructuration basée sur les noms
const { firstName, lastName, onClick } = this.props
//////////////////////

///////////////////////////////////////////////////////////
// À l'ancienne
const names = fullName.split(' ')
const firstName = names[0]
const lastName = names[1]

// Avec une déstructuration basée sur les positions
const [firstName, lastName] = fullName.split(' ')
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
//export import
// Au sein du fichier textUtils.js

export function countWords (text) {
  return text.split(/\W+/u).filter(Boolean).length
}

export function normalizeSpacing (text) {
  return text.replace(/\s+/u, ' ').trim()
}

// Au sein d’un fichier main.js, dans le même répertoire :

import { countWords } from './textUtils'

console.log(countWords('Hello world, this is nice!'))
///////////////////////////////////////////////////////////

// Dans le module exportateur, SuperComponent.js :
export default class SuperComponent {
  // …
}

// Dans le module importateur, dans le même répertoire :
import GreatComponent from './SuperComponent'

//////////////////////////////////////////////////////////
function CoolComponent() {
  return React.createElement('p', {}, 'Youpi So Cool !')
}

ReactDOM.render(
  React.createElement(CoolComponent),
  document.getElementById('root')
)

//////////////////////////////JSX///////////////////////
function CoolComponent() {
  return <p>Youpi So Cool !</p>
}

ReactDOM.render(
  <CoolComponent />,
  document.getElementById('root')
)
///////////////////////////////////////////////////////

//avec parametre pour jsx props
function CoolComponent({ adjective = 'Cool' }) {
  return <p>Youpi So {adjective} !</p>
}

ReactDOM.render(
  <div>
    <CoolComponent adjective="awesome" />
    <CoolComponent />
  </div>,
  document.getElementById('root')
)
///////////////////////////////////////////////////////

<form method="post" action="/sessions" onSubmit={this.handleSubmit}>
  <p className="field">
    <label>
      E-mail
      <input
        type="email"
        name="email"
        required
        autoFocus
        value={this.state.email}
        onChange={this.handleFieldChange}
      />
    </label>
  </p>
  <p className="field">
    <label>
      Mot de passe
      <input
        type="password"
        name="password"
        required
        value={this.state.password}
        onChange={this.handleFieldChange}
      />
    </label>
  </p>
  <p>
    <button type="submit" value="Connexion" />
  </p>
</form>

////////////////////////////////////////////////////////////////////
<input
  type="email"
  name="email"
  maxlength={42}
  readonly={false}
  onChange={this.handleFieldChange}
  value={this.state.value}
/>
// synthase pour true
<input type="email" name="email" autoFocus required />
//

//Commentaire JSX
{/* La classe 'field' assure l’espacement vertical convenable */}


//Attention au minuscule le deuxieme est faut en jsx
[
  <CoolComponent/>,
  <coolComponent/>,
]
// donne :
[
  React.createElement(CoolComponent, null),
  React.createElement('coolComponent', null),
]

///////////////////////////////////////////////
render() {
  const logoutButton = (
    <button onClick={this.logOut}>
      <LogoutIcon />
      Déconnexion
    </button>
  )

  return (
    <Card>
      <CardTitle>
        Oh le joli titre
        {logoutButton}
      </CardTitle>
      …
      <Footer>
        © 2017 Des Gens Bien™ •
        {logoutButton}
      </Footer>
    </Card>
  )
}
////////////////////////////////////////////////////



