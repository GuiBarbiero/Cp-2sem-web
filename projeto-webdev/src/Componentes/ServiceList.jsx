
import ServiceCard from './ServiceCard';

const ServiceList = () => {
  const services = [
    { number: '01', title: 'Youtube', description: 'Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.' },
    { number: '02', title: 'Tiktok', description: 'Faça sua criatividade brilhar em vídeos curtos e envolventes que vão ativar a comunidade global do TikTok.' },
    { number: '03', title: 'Facebook', description: 'Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.' },
    { number: '04', title: 'Instagram', description: 'Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.' }
  ];

  return (
    <section className="services">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          number={service.number}
          title={service.title}
          description={service.description}
        />
      ))}
    </section>
  );
};

export default ServiceList;
