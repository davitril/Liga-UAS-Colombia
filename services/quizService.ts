
import { Question } from '../types';

// Expanded question bank to support a 50-question quiz.
const questionBank: Question[] = [
    {
        id: 1,
        topic: "Derecho Aéreo",
        question: "La seguridad operacional en el espacio aéreo y la seguridad de las personas en tierra son aspectos relevantes para las normas de aeronaves no tripuladas. Este postulado es:",
        options: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero",
    },
    {
        id: 2,
        topic: "Derecho Aéreo",
        question: "¿Cuál es la sigla del Organismo de Autoridad de la Aviación Civil a nivel mundial?",
        options: ["FAA", "EASA", "OACI"],
        correctAnswer: "OACI",
    },
    {
        id: 3,
        topic: "Derecho Aéreo",
        question: "¿Cuál es uno de los propósitos principales de las regulaciones de UAS?",
        options: ["Restringir el acceso público a la tecnología de UAS.", "Garantizar la seguridad de las operaciones y proteger la integridad del espacio aéreo.", "Facilitar la adquisición de UAS por parte de particulares sin restricciones."],
        correctAnswer: "Garantizar la seguridad de las operaciones y proteger la integridad del espacio aéreo.",
    },
    {
        id: 4,
        topic: "Derecho Aéreo",
        question: "La normatividad aeronáutica válida en Colombia se encuentra compilada en:",
        options: ["NAN - Normatividad Aeronáutica Nacional.", "RAC - Reglamentos Aeronáuticos de Colombia.", "LAR - Reglamentos Aeronáuticos Latinoamericanos."],
        correctAnswer: "RAC - Reglamentos Aeronáuticos de Colombia.",
    },
    {
        id: 5,
        topic: "Derecho Aéreo",
        question: "¿Qué se entiende por la Sigla SARP's?",
        options: ["Recopilación de Procedimientos, Normas y Métodos Ordenados para la Aviación Civil Internacional.", "Énfasis para la aplicación de Procedimientos, Normas y Métodos Asistidos para la Aviación Civil.", "Estudio de Procedimientos y Redacción de Normas y Métodos Recomendados para la Aviación Civil Internacional."],
        correctAnswer: "Estudio de Procedimientos y Redacción de Normas y Métodos Recomendados para la Aviación Civil Internacional.",
    },
    {
        id: 6,
        topic: "Aerodinámica Aplicada",
        question: "¿Qué es un perfil aerodinámico?",
        options: ["La capacidad de una aeronave para realizar maniobras acrobáticas.", "La forma y las características del perfil transversal de una superficie sustentadora.", "La velocidad máxima que puede alcanzar una aeronave."],
        correctAnswer: "La forma y las características del perfil transversal de una superficie sustentadora.",
    },
    {
        id: 7,
        topic: "Aerodinámica Aplicada",
        question: "¿Cómo se contrarresta el torque de las hélices en un multirotor?",
        options: ["Todas las hélices giran en sentido de las manecillas del reloj.", "Un solo motor no se ve afectado por el torque.", "Las hélices se contrarrestan por pares girando en sentidos contrarios."],
        correctAnswer: "Las hélices se contrarrestan por pares girando en sentidos contrarios.",
    },
    {
        id: 8,
        topic: "Aerodinámica Aplicada",
        question: "La definición mas acertada para \"AERODINÁMICA\" es:",
        options: ["Es el estudio del comportamiento del aire en movimiento al interactuar con un objeto.", "El estudio de las propiedades químicas de los gases en el aire.", "Es el movimiento del aire en la tierra."],
        correctAnswer: "Es el estudio del comportamiento del aire en movimiento al interactuar con un objeto.",
    },
    {
        id: 9,
        topic: "Aerodinámica Aplicada",
        question: "¿De qué trata la Ecuación de Bernoulli?",
        options: ["Describe el comportamiento de un objeto.", "Describe los cambios de velocidad por la temperatura.", "Describe la conservación de energia relacionando presión y velocidad."],
        correctAnswer: "Describe la conservación de energia relacionando presión y velocidad.",
    },
    {
        id: 10,
        topic: "Aerodinámica Aplicada",
        question: "¿Cuál es la principal función del borde de ataque de un perfil aerodinámico?",
        options: ["Borde en donde se manifiestan los vectores de fuerza.", "Borde en donde la presión ejerce fuerza de sustentación.", "Borde que recibe el aire de impacto y lo divide para recorrer el perfil aerodinámico."],
        correctAnswer: "Borde que recibe el aire de impacto y lo divide para recorrer el perfil aerodinámico.",
    },
    {
        id: 11,
        topic: "Meteorología Aeronáutica",
        question: "¿Cuál es la diferencia entre tiempo meteorológico y clima?",
        options: ["No hay diferencia, son lo mismo.", "El tiempo meteorológico es un estado de la atmósfera en un momento determinado, en una locación específica. El Clima son las condiciones predominantes de una región amplia por periodos largos.", "El clima es un estado de la atmósfera en un momento determinado, y el tiempo son las condiciones predominantes de una región."],
        correctAnswer: "El tiempo meteorológico es un estado de la atmósfera en un momento determinado, en una locación específica. El Clima son las condiciones predominantes de una región amplia por periodos largos.",
    },
    {
        id: 12,
        topic: "Meteorología Aeronáutica",
        question: "¿Qué es la atmósfera?",
        options: ["Es el conjunto de gases y nubes que envuelven a la tierra.", "Es manto de vapor de agua que rodea a la tierra.", "Ninguna de las opciones es correcta."],
        correctAnswer: "Es el conjunto de gases y nubes que envuelven a la tierra.",
    },
    {
        id: 13,
        topic: "Meteorología Aeronáutica",
        question: "¿Qué es el viento?",
        options: ["Es el movimiento de una masa de aire en sentido vertical.", "Es el movimiento de una masa de aire en sentido horizontal.", "Es el movimiento de una masa de aire sin importar su sentido."],
        correctAnswer: "Es el movimiento de una masa de aire en sentido horizontal.",
    },
    {
        id: 14,
        topic: "Meteorología Aeronáutica",
        question: "Las nubes tipo Estratos, Cúmulos y Estratocúmulos son consideradas nubes:",
        options: ["Bajas", "Medias", "De tormenta"],
        correctAnswer: "Bajas",
    },
    {
        id: 15,
        topic: "Meteorología Aeronáutica",
        question: "¿Cuál es el tipo de nube que produce mayor turbulencia y es potencialmente peligrosa para la aviación?",
        options: ["CS - Cirrostratos", "CB - Cumulonimbos", "Todas las nubes son peligrosas para la aviación."],
        correctAnswer: "CB - Cumulonimbos",
    },
    {
        id: 16,
        topic: "Navegación Aérea",
        question: "¿Qué es el 'geofencing'?",
        options: ["Una limitación de hardware en el dron.", "Hace referencia a una cerca delimitando un perímetro virtual en un área geográfica.", "Un tipo de sensor de proximidad."],
        correctAnswer: "Hace referencia a una cerca delimitando un perímetro virtual en un área geográfica.",
    },
    {
        id: 17,
        topic: "Navegación Aérea",
        question: "¿Cuál es la definición de rumbo?",
        options: ["Es el camino general que se traza en una carta de navegación.", "Es el ángulo formado entre el norte geográfico y la posición con respecto a donde quiero llegar.", "Es la dirección respecto al norte magnético en la que una aeronave se desplaza en vuelo"],
        correctAnswer: "Es la dirección respecto al norte magnético en la que una aeronave se desplaza en vuelo",
    },
    {
        id: 18,
        topic: "Navegación Aérea",
        question: "¿Qué significa la Sigla GNSS?",
        options: ["Global Navigation Satellite System.", "Ground Navigation Syncronic System.", "Global New Positioning System."],
        correctAnswer: "Global Navigation Satellite System.",
    },
    {
        id: 19,
        topic: "Navegación Aérea",
        question: "En el sistema de orientación terrestre, la latitud hace referencia a:",
        options: ["Línea de orientación paralela a la línea Meridiano de Greenwich y va de 0° a 180°.", "Línea de orientación paralela a la línea del Ecuador y va de 0° al norte y se extiende hasta los 90° hacia el sur.", "Línea de orientación paralela a la línea del Ecuador y va de 0° a 90° hacia el norte o hacia el sur."],
        correctAnswer: "Línea de orientación paralela a la línea del Ecuador y va de 0° a 90° hacia el norte o hacia el sur.",
    },
    {
        id: 20,
        topic: "Navegación Aérea",
        question: "¿Qué es un TMA?",
        options: ["Son espacios aéreos establecidos para la protección de las aproximaciones de las aeronaves por instrumentos a una pista de aterrizaje.", "Son espacios aéreos establecidos para la recepción de la confluencia de aerovías.", "Son espacios aéreos establecidos para la protección del presidente."],
        correctAnswer: "Son espacios aéreos establecidos para la recepción de la confluencia de aerovías.",
    },
    {
        id: 21,
        topic: "Factores Humanos",
        question: "¿Cuál de los siguientes factores humanos afecta significativamente la actuación en la aviación no tripulada?",
        options: ["Altitud.", "Fatiga.", "Peso de las antenas del control remoto."],
        correctAnswer: "Fatiga.",
    },
    {
        id: 22,
        topic: "Factores Humanos",
        question: "¿Cuál es el fin de la capacitación en actuaciones humanas?",
        options: ["Para reducir los costos operativos.", "Para aumentar la velocidad de vuelo.", "Para tomar decisiones seguras y efectivas durante las operaciones."],
        correctAnswer: "Para tomar decisiones seguras y efectivas durante las operaciones.",
    },
    {
        id: 23,
        topic: "Factores Humanos",
        question: "¿Qué impacto puede tener el estrés en la actuación de los pilotos y operadores de UAS?",
        options: ["Aumenta la adrenalina y propicia la claridad mental.", "Aumenta exponencialmente los errores y reduce la eficiencia", "Facilita la comunicación y el nivel de concentración."],
        correctAnswer: "Aumenta exponencialmente los errores y reduce la eficiencia",
    },
    {
        id: 24,
        topic: "Factores Humanos",
        question: "¿Qué es la ergonomía cognitiva aplicada a la aviación no tripulada?",
        options: ["Es el estudio de la postura de los operadores y pilotos.", "Es el mejoramiento de la relación entre máquinas y personas para entrelazar factores como la comunicación, trabajo en equipo, percepción, memoria, etc.", "Es el proceso de mejora de las condiciones y resistencia física de los pilotos."],
        correctAnswer: "Es el mejoramiento de la relación entre máquinas y personas para entrelazar factores como la comunicación, trabajo en equipo, percepción, memoria, etc.",
    },
    {
        id: 25,
        topic: "Factores Humanos",
        question: "¿Cuál es el propósito de las regulaciones de tiempo de vuelo y descanso en la aviación?",
        options: ["Aumentar la carga de trabajo de los operadores.", "Evitar la fatiga de los pilotos.", "Aumentar el tiempo de vuelo de los UAS."],
        correctAnswer: "Evitar la fatiga de los pilotos.",
    },
    {
        id: 26,
        topic: "Sistema de Gestión de la Seguridad Operacional",
        question: "¿Cómo se traduce la sigla S.M.S. desde el contexto de la seguridad operacional?",
        options: ["Sistema de la seguridad mixta en operaciones.", "Manejo de riesgos para la seguridad operacional aérea.", "Sistema de gestión de la seguridad operacional."],
        correctAnswer: "Sistema de gestión de la seguridad operacional.",
    },
    {
        id: 27,
        topic: "Sistema de Gestión de la Seguridad Operacional",
        question: "¿De qué consta la estructura del SMS?",
        options: ["Consta de cuatro (4) componentes y doce (12) elementos.", "Consta de doce (12) componentes y cuatro (4) elementos.", "Ninguna de las opciones es correcta."],
        correctAnswer: "Consta de cuatro (4) componentes y doce (12) elementos.",
    },
    {
        id: 28,
        topic: "Sistema de Gestión de la Seguridad Operacional",
        question: "Un análisis de riesgos realizado para un vuelo UAS, debe contemplar la gestión de riesgos de seguridad operacional del tipo de operación aérea UAS. Este postulado es:",
        options: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero",
    },
    {
        id: 29,
        topic: "Sistema de Gestión de la Seguridad Operacional",
        question: "¿Qué se busca con la implementación de la gestión de la Seguridad Operacional?",
        options: ["Busca el cumplimiento de las normas y procedimientos aeronáuticos.", "Busca mitigar proactivamente riesgos de la seguridad operacional antes de que resulten en accidentes o incidentes.", "Busca que todas aquellas actuaciones de conciencia situacional sean realizadas por todas las personas."],
        correctAnswer: "Busca mitigar proactivamente riesgos de la seguridad operacional antes de que resulten en accidentes o incidentes.",
    },
    {
        id: 30,
        topic: "Sistema de Gestión de la Seguridad Operacional",
        question: "En el contexto de la seguridad operacional, la definición mas acertada para \"Probabilidad\" es:",
        options: ["Posibles efectos de un evento o condición insegura.", "Consecuencias de un riesgo.", "Calificación de la frecuencia de posibilidad de que un evento ocurra."],
        correctAnswer: "Calificación de la frecuencia de posibilidad de que un evento ocurra.",
    },
    {
        id: 31,
        topic: "Conocimientos Generales de las UA",
        question: "¿Qué función cumple el Gimbal?",
        options: ["Aumenta la precisión del GPS.", "Mejora la señal de transmisión de video.", "Estabiliza el movimiento a la cámara."],
        correctAnswer: "Estabiliza el movimiento a la cámara.",
    },
    {
        id: 32,
        topic: "Conocimientos Generales de las UA",
        question: "¿Qué tipo de motores eléctricos empleados por los UA son más eficientes?",
        options: ["Motores trifásicos.", "Motores con escobillas.", "Motores sin escobillas."],
        correctAnswer: "Motores sin escobillas.",
    },
    {
        id: 33,
        topic: "Conocimientos Generales de las UA",
        question: "¿Qué tipo de baterías empleadas por los UA son las más comunes?",
        options: ["Li-Fe.", "Ni-Cd.", "Li-Po."],
        correctAnswer: "Li-Po.",
    },
    {
        id: 34,
        topic: "Conocimientos Generales de las UA",
        question: "¿Cuál es la funcionalidad del ESC en un sistema de propulsion electrico?",
        options: ["Control de velocidad electrónico, para medir la fuerza del motor.", "Electronic Speed Controller que envía la corriente necesaria para mantener las revoluciones de los motores.", "Electronic Speed Controller, controla la corriente que produce el generador."],
        correctAnswer: "Electronic Speed Controller que envía la corriente necesaria para mantener las revoluciones de los motores.",
    },
    {
        id: 35,
        topic: "Conocimientos Generales de las UA",
        question: "¿Qué es el OSD?",
        options: ["Sensor de Obstáculos Direccional.", "On Screen Display, mezcla la imagen de la cámara con la información de telemetría.", "On Screen Display, transmite únicamente la señal de la cámara a la pantalla."],
        correctAnswer: "On Screen Display, mezcla la imagen de la cámara con la información de telemetría.",
    },
    {
        id: 36,
        topic: "Planificación de Vuelo",
        question: "¿Qué se entiende por la palabra NOTAM?",
        options: ["Noticias para el hombre del mar", "Informes operacionales", "Noticias para el hombre del aire."],
        correctAnswer: "Informes operacionales",
    },
    {
        id: 37,
        topic: "Planificación de Vuelo",
        question: "¿Qué entendemos por AIP?",
        options: ["Publicación de Información Aeronáutica.", "Airdrome Instrument Procedures.", "Aplicación Informativa Periódica."],
        correctAnswer: "Publicación de Información Aeronáutica.",
    },
    {
        id: 38,
        topic: "Planificación de Vuelo",
        question: "Las limitaciones operacionales están dadas por las características técnicas de la aeronave, el pronóstico meteorológico y el diseño de las maniobras de vuelo. Este postulado es:",
        options: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero",
    },
    {
        id: 39,
        topic: "Planificación de Vuelo",
        question: "¿Cuál es el objetivo principal de la seguridad en la aviación no tripulada?",
        options: ["Garantizar la seguridad de las operaciones de drones y su integración segura en el espacio aéreo.", "Promover una cultura de seguridad y cumplimiento de las regulaciones.", "Las dos opciones son correctas."],
        correctAnswer: "Las dos opciones son correctas.",
    },
    {
        id: 40,
        topic: "Planificación de Vuelo",
        question: "¿Por qué es importante conocer, entender y verificar la regulación antes de planificar un vuelo con un UAS?",
        options: ["Para evitar violaciones de las restricciones y maximizar la seguridad operacional.", "Para asegurarse de que la aeronave pueda cumplir con las restricciones.", "Para determinar el precio de las tarifas que nos pueden aplicar."],
        correctAnswer: "Para evitar violaciones de las restricciones y maximizar la seguridad operacional.",
    },
    {
        id: 41,
        topic: "Comunicaciones Aeronáuticas",
        question: "¿En qué bandas de frecuencias operan las comunicaciones aéreas?",
        options: ["VLF Muy Baja Frecuencia.", "VHF Muy Alta Frecuencia.", "UHF Ultra Alta Frecuencia."],
        correctAnswer: "VHF Muy Alta Frecuencia.",
    },
    {
        id: 42,
        topic: "Comunicaciones Aeronáuticas",
        question: "¿Cuál es el dial de la frecuencia de emergencia aeronáutica?",
        options: ["118,0 MHz.", "121,5 MHz.", "122,9 KHz."],
        correctAnswer: "121,5 MHz.",
    },
    {
        id: 43,
        topic: "Comunicaciones Aeronáuticas",
        question: "¿Qué es interferencia?",
        options: ["Propagación de muchas ondas de radio.", "Intermitencia de una onda de frecuencia.", "Cuando dos señales en la misma onda se interrumpen entre sí."],
        correctAnswer: "Cuando dos señales en la misma onda se interrumpen entre sí.",
    },
    {
        id: 44,
        topic: "Comunicaciones Aeronáuticas",
        question: "¿Cuál es el alfabeto utilizado para deletrear palabras en la aviación?",
        options: ["Código \"Q\" de comunicaciones.", "Lenguaje militar táctico.", "Alfabeto Fonético Internacional OACI"],
        correctAnswer: "Alfabeto Fonético Internacional OACI",
    },
    {
        id: 45,
        topic: "Comunicaciones Aeronáuticas",
        question: "¿Qué significa PAN-PAN?",
        options: ["Señal de aviso de Urgencia.", "Señal de aviso de emergencia.", "Aviso de información aeronáutica."],
        correctAnswer: "Señal de aviso de Urgencia.",
    },
    {
        id: 46,
        topic: "RAC 100",
        question: "¿Cuál es el título del RAC 100?",
        options: ["Generalidades de las Aeronaves No Tripuladas UAS.", "Reglamentación Operación De Sistemas De Aeronaves No Tripuladas UAS.", "Reglamento de Utilización de Aeronaves no Tripuladas UAS."],
        correctAnswer: "Reglamentación Operación De Sistemas De Aeronaves No Tripuladas UAS.",
    },
    {
        id: 47,
        topic: "RAC 100",
        question: "¿Qué significa la sigla VLOS?",
        options: ["Visual Line of Sight / Visibilidad en linea de vista", "Virtual Line of Sight / Visibilidad en linea de vista virtual", "Visual Line Operation Safety / Visibilidad en linea de vista de operación segura"],
        correctAnswer: "Visual Line of Sight / Visibilidad en linea de vista",
    },
    {
        id: 48,
        topic: "RAC 100",
        question: "¿Qué significa la sigla BVLOS?",
        options: ["Beyond Virtual Line of Sight / Visibilidad más allá de la línea virtual de vista.", "Basic Visual Line Operation Safety / Visibilidad en línea basica de operación segura.", "Beyond Visual Line of Sight / Visibilidad más allá de la linea de vista"],
        correctAnswer: "Beyond Visual Line of Sight / Visibilidad más allá de la linea de vista",
    },
    {
        id: 49,
        topic: "RAC 100",
        question: "La distancia máxima permitida para operar una UA en condición visual VLOS es:",
        options: ["500 mts.", "750 mts.", "500 ft."],
        correctAnswer: "750 mts.",
    },
    {
        id: 50,
        topic: "RAC 100",
        question: "Es obligatorio que cada UA tenga una etiqueta de identificación y que contenga datos mínimos del propietario o Explotador UAS. Este postulado es:",
        options: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero",
    },
    {
        id: 51,
        topic: "Derecho Aéreo",
        question: "El uso indebido o irresponsable de aeronaves no tripuladas, podrá ser sancionado únicamente por la Autoridad Aeronáutica competente. Este postulado es:",
        options: ["Verdadero", "Falso"],
        correctAnswer: "Falso",
    },
     {
        id: 52,
        topic: "Conocimientos Generales de las UA",
        question: "¿Qué significa VTOL?",
        options: ["Vertical Take Off and Landing / Aeronave de despegue y aterrizaje vertical.", "Visual Talk off line / Aeronave de despegue y aterrizaje horizontal.", "Virtual Takeoff and Landing / Despegue y Aterrizaje Virtual."],
        correctAnswer: "Vertical Take Off and Landing / Aeronave de despegue y aterrizaje vertical.",
    }
];

export const QUIZ_LENGTH = 50;

/**
 * Shuffles an array in place.
 * @param array The array to shuffle.
 */
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

/**
 * Starts a new quiz by selecting a random subset of questions.
 * @returns An array of questions for the new quiz.
 */
export const startNewQuiz = (): Question[] => {
  const shuffled = shuffleArray(questionBank);
  return shuffled.slice(0, QUIZ_LENGTH);
};