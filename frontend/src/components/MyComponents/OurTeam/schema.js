

const blockSchema = (props) => {
  return {
    title: 'Perfil',
    fieldsets: [
      {
      id: "default",
      title: "Default",
      fields: [
        "nome",
        "cargo",
        "descrição",
        "email"
      ]
    }
    ],
    properties: {
      nome: {
        title: "Nome"
      },
      cargo: {
        title: "Cargo",
        default: "Aluno"
      },
      descrição: {
        title: "Descrição"
      },
      email: {
        title: "Email"
      }
    },
    required: ["nome", "cargo", "email"]
  }
}

export default blockSchema;