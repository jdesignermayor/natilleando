
export const prices = {
  inscriptionPriceInCOP: 5000,
  debtFineInCop: 500,
};

export const PRIMARY_ROLE = 3;

export const homeService = {
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
      title: "Simples normas",
      point: "rules",
      subtitle: "",
      imgURL: "https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-leadership-1@400x400.png",
      description: ` <p>
      Antes de iniciar con las normas es importante dejar claro, esta es una
      natillera exclusivamente familiar y/o amigos de confianza, no tiene
      fines lucrativos para ninguna parte, y fue desarrollada solo con el fin
      de integrar de alguna manera a la familia o persona independiente en un
      ahorro navideño. Es administrada por personas responsables.
    </p>
    <p class="mt-5">
      Si desea hacer parte de este mundo de ahorro familiar bienvenido a
      natilleando.
    </p>
    <br />`,
      items: [
        {
          label: "El periodo de ahorro abarca desde enero a diciembre del año en curso.",
        },
        {
          label: "Si el socio decide retirarse antes de diciembre no recibirá los intereses acumulados hasta la fecha.",
        },
        { label: "Los intereses obtenidos en el periodo de ahorro se repartirá a todos los socios por igual independientes del ahorro invertido por cada socio." },
        { label: "Los beneficios a repartir se obtendrán a través de: Multas, rifas, eventos, intereses generados por nequi, intereses generados por préstamos y otros extraordinarios." }
      ]
    },
    {
      title: "Requisitos",
      point: "requirements",
      subtitle: "Ingreso y ahorro",
      imgURL: "https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-evaluate-performance-employee-2@400x400.png",
      items: [
        {
          label: "La inscripción tiene un costo de $ 5.000 pesos anuales.",
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
          label: "En caso de no dar el ahorro entre los primeros 5 días del mes, se cobrará una suma de $500 pesos por cada día de retraso.",
        },
        {
          label: "Para los créditos se cobrará un 5% de interés por mes sobre el valor de la deuda.",
        },
        { label: "Las  multas como los intereses deben ser pagados al inicio de mes con la cuota del ahorro." },
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
        { label: "El crédito solo se realizará sobre el 75% del ahorro aportado por el socio y el otro 25% es para cubrir multas y moras en caso de algún incumplimiento por parte del socio." },
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