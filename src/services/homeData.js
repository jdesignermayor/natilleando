export const prices = {
  inscriptionPriceInCOP: 5000,
  debtFineInCop: 500,
};

export const homeData = {
  title: "Natilleando",
  menuItems: [
    { name: "Normas", style: "primaryLight", point: "rules" },
    { name: "Créditos", style: "purple", point: "credits" },
    { name: "Multas e interés", style: "orange", point: "debts" },
    { name: "Requisitos", style: "blueLight", point: "requirements" },
    { name: "Rifas y eventos", style: "pink", point: "events" },
    { name: "Liquidación", style: "money", point: "payments" },
  ],
  menuData: [
    {
      title: "Requisitos",
      point: "requirements",
      subtitle: "Ingreso y ahorro",
      imgURL: "https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-evaluate-performance-employee-2@400x400.png",
      items: [
        {
          label: "La inscripción tiene un costo de $ 5.000 pesos.",
        },
        {
          label: "El ahorro puede ser variable, pero solo será una sola vez al mes.",
        },
        { label: "Para mantener actualizada la información de los socios, se debe diligenciar el formulario de datos que hay en la app" }
      ]
    },
    {
      title: "Multas e interés",
      subtitle: "",
      imgURL: "https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-overworked-employee-3@400x400.png",
      point: "debts",
      items: [
        {
          label: "En caso de no dar el ahorro entre los primeros 5 días del mes, se cobrará una $ 500 pesos por cada día de retraso.",
        },
        {
          label: "Para los créditos se cobrará un 5% de interés por mes sobre el valor de la deuda.",
        },
        { label: "Las  multas como los intereses deben ser pagados al inicio de mes con la cuota del ahorro." },
        {
          label: "Los intereses serán en un(%) porcentaje al monto de ahorro del socio."
        },
        {
          label: "Impulsamos la buena gestión del dinero, así que el socio que no pague así sea un mes, automáticamente será expulsado de la natillera."
        }
      ]
    },
    {
      title: "Créditos",
      point: "credits",
      subtitle: "",
      imgURL: "https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-work-life-balance-2@400x400.png",
      items: [
        {
          label: "Los créditos se realiza, sin exceder el monto ahorrado del socio. (revisar antigüedad del socio en la natillera)",
        },
        {
          label: "Solo se otorgan crédito a los socios de la natillera.",
        },
        { label: "Los créditos se aprobarán siempre que haya dinero disponible para tal fin." },
        {
          label: "Los créditos solicitados por la app se gestionará más rápido su desembolso."
        }
      ]
    },
    {
      title: "Rifas y eventos",
      point: "events",
      imgURL: "https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-team-success-3@400x400.png",
      subtitle: "",
      items: [
        {
          label: "En caso de que algún socio sea el afortunado ganador de la rifa mensual. Esta será pagada al día siguiente del sorteo.",
        },
        {
          label: "Socio que por algún motivo no haya cancelado la rifa al momento del sorteo, no entrara a participar en el mismo.",
        }
      ]
    }
  ],
}