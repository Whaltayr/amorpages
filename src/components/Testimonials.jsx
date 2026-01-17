const data = [
  {
    id: "t1",
    name: "Ana Silva",
    role: "Cliente",
    quote:
      "Surpreendeu o meu namorado — ficou emocionado. Entrega rápida e muito cuidado com as fotos.",
    avatar: "/src/assets/avatars/test2.webp",
  },
  {
    id: "t2",
    name: "João Costa",
    role: "Cliente",
    quote:
      "Design lindo e o processo foi super simples. Recomendo a quem quer algo pessoal.",
    avatar: "/src/assets/avatars/test1.webp",
  },
  {
    id: "t3",
    name: "Mariana Lopes",
    role: "Cliente",
    quote:
      "O template Premium ficou perfeito. As animações são subtis e muito elegantes.",
    avatar: "/src/assets/avatars/test3.webp",
  },
];
export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gr-h2">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-12">

        <div>
            <h2 className="font-montserrat text-4xl text-dark font-semibold text-center">
              O que os nossos cliente dizem
            </h2>
            <p className="font-inter mt-3 text-2xl max-w-2xl mx-auto text-dark/80 text-center">
              Pequenas histórias grandes emoções. Depoimentos reais de quem já
              surpreendeu.
            </p>
        </div>

        <div className="grid gap-6 sm-grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <blockquote
              key={item.id}
              className="bg-white-1 p-6 rounded-2xl shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.avatar}
                  alt={`${item.name} avatar`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.role}</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                “{item.quote}”
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
