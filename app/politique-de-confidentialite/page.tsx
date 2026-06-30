'use client';
import { useLang } from '@/contexts/LanguageContext';
import { ReactNode } from 'react';

function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="font-serif text-2xl text-[#1C1917] font-medium mb-5 scroll-mt-24">
      {children}
    </h2>
  );
}

function H3({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3 id={id} className="font-serif text-lg text-[#1C1917] font-medium mb-3 mt-8 scroll-mt-24">
      {children}
    </h3>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="text-[#78716C] text-sm leading-relaxed mb-4 font-light">{children}</p>;
}

function Divider({ children }: { children: ReactNode }) {
  return <div className="border-t border-[#E7E5E0] pt-10 mt-10">{children}</div>;
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 mb-5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm text-[#78716C] font-light leading-relaxed">
          <span className="text-[#C4A35A] shrink-0 mt-0.5">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Steps({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2 mb-5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm text-[#78716C] font-light leading-relaxed">
          <span className="text-[#C4A35A] font-medium shrink-0">{i + 1}.</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default function PolitiqueConfidentialitePage() {
  const { lang } = useLang();

  const tocItems: [string, string][] = [
    ['#s1', '1. Notre engagement'],
    ['#s2', '2. Responsabilité'],
    ['#s3', '3. Consentement'],
    ['#s4', '4. Raisons de la collecte | utilisation | conservation'],
    ['#s5', '5. Limite de la collecte'],
    ['#s6', "6. Limite de l'utilisation | communication | conservation"],
    ['#s7', '7. Exactitude des renseignements'],
    ['#s8', '8. Efforts déployés afin de protéger vos renseignements personnels'],
    ['#s9', '9. Durée de conservation de vos renseignements personnels'],
    ['#s10', '10. Vos choix en matière de renseignements personnels'],
    ['#s11', '11. Votre droit de porter plainte'],
    ['#annexeA', 'Annexe A — Procédure en cas de manquement | brèche | atteinte'],
    ['#annexeB', 'Annexe B — Références de la Chambre de la sécurité financière'],
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-[#0C1B2E] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-[#C4A35A] text-[11px] tracking-[0.35em] uppercase mb-3">
            OP Gestion Financière Stratégique
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-medium">
            {lang === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}
          </h1>
          {lang === 'en' && (
            <p className="text-white/50 text-sm mt-3 font-light">
              This policy is provided in French only, in accordance with Quebec law.
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-8 py-16 md:py-24">

        {/* Meta */}
        <div className="mb-10 pb-8 border-b border-[#E7E5E0]">
          <p className="text-[#78716C] text-sm mb-1">
            <span className="font-medium text-[#1C1917]">Chef de la protection des renseignements personnels : </span>
            Olivier Pastorel
          </p>
          <p className="text-[#78716C] text-sm">
            <span className="font-medium text-[#1C1917]">Date de révision : </span>
            26 octobre 2023
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="mb-16 p-6 bg-[#F9F8F4] border-l-2 border-[#C4A35A]">
          <p className="text-[#1C1917] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Table des matières
          </p>
          <ol className="space-y-1.5 text-sm text-[#78716C]">
            {tocItems.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#C4A35A] transition-colors duration-150">
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 1. Notre engagement */}
        <H2 id="s1">1. Notre engagement</H2>
        <P>
          Afin de vous donner accès aux produits et aux services financiers, nous recueillons certains de vos renseignements personnels et assurons la protection de ceux-ci. Nous respectons la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE), une loi fédérale concernant la protection des renseignements personnels, et toute loi provinciale qui s'applique. Nous basons également cette politique sur les recommandations et sur le code déontologique de la Chambre de la sécurité financière, qui tient lieu d'organisme d'autorèglementation de notre industrie. Voyez en annexe B les références au code déontologique, ainsi que les questions fréquemment posées.
        </P>

        {/* 2. Responsabilité */}
        <Divider>
          <H2 id="s2">2. Responsabilité</H2>
          <P>
            Nous sommes responsables des renseignements personnels que nous recevons de notre clientèle. Nous protégerons ces renseignements, quel que soit le moyen utilisé lors de la transmission.
          </P>
        </Divider>

        {/* 3. Consentement */}
        <Divider>
          <H2 id="s3">3. Consentement</H2>
          <P>
            Nous recueillerons uniquement les renseignements fournis avec votre consentement. Il y aura utilisation de vos renseignements personnels, notamment votre nom, votre adresse, votre date de naissance, vos antécédents médicaux et vos habitudes de vie, pour trouver des produits, des concepts et des services financiers qui répondent aux besoins que vous avez identifiés. En signant le formulaire d'autorisation, vous consentez, en votre nom ainsi qu'au nom de vos liquidateur(-trice)s, administrateur(-trice)s ou cessionnaires, à :
          </P>
          <Bullets items={[
            "Fournir des renseignements exacts tout au long de notre relation d'affaires et au fur et à mesure que votre situation évolue.",
            "Nous permettre d'utiliser, de transmettre et de divulguer ces renseignements au besoin à nos fournisseurs, associé(e)s et agent(e)s généraux(-ales) administrateur(-trice)s, qui pourraient conserver certains renseignements dans leurs dossiers pour une utilisation et une recommandation ultérieure par nous, nos fournisseurs et tout cessionnaire.",
            "Nous permettre de conserver vos renseignements personnels, y compris les renseignements médicaux qui apparaissent sur vos propositions, dans nos dossiers en format papier et électronique, aussi longtemps que vous souhaitez faire affaire avec nous ou que nous devions satisfaire à un besoin commercial ou règlementaire en conservant les renseignements.",
            "Céder votre dossier, y compris vos renseignements personnels, à un(e) autre agent(e) et/ou un(e) agent(e) général(e) administrateur(-trice), pour continuer à répondre à vos besoins, advenant l'invalidité, le décès, la retraite ou tout autre événement majeur affectant notre cabinet. Vous avez cependant le droit de choisir votre propre agent à ce moment-là, si jamais vous préférez un(e) autre que celui ou celle qui vous a été attribué(e).",
          ]} />
        </Divider>

        {/* 4. Raisons de la collecte */}
        <Divider>
          <H2 id="s4">4. Raisons de la collecte | utilisation | conservation</H2>
          <P>
            Nous recueillons tous les renseignements personnels (y compris les renseignements médicaux et financiers ainsi que ceux sur la société et les renseignements qui y sont liés) fournis avec votre consentement. Nous les utilisons et les conservons uniquement afin de fournir des conseils, d'administrer des produits ou des services que vous achetez par notre entremise, et de vous conseiller de nouveaux produits ou services qui pourraient vous intéresser.
          </P>
        </Divider>

        {/* 5. Limite de la collecte */}
        <Divider>
          <H2 id="s5">5. Limite de la collecte</H2>
          <P>
            Nous recueillons et conservons uniquement les renseignements qui nous aident à vous conseiller, y compris les renseignements personnels, financiers et médicaux, et à répondre à nos obligations règlementaires. Nous utilisons uniquement des moyens équitables et légaux pour recueillir ces renseignements.
          </P>
        </Divider>

        {/* 6. Limite de l'utilisation */}
        <Divider>
          <H2 id="s6">6. Limite de l'utilisation | communication | conservation</H2>
          <P>
            Nous utiliserons et divulguerons vos renseignements personnels afin de remplir nos fonctions, de vous conseiller et, s'il y a lieu, d'observer la loi. Les renseignements personnels contenus dans votre dossier client(e) seront communiqués seulement :
          </P>
          <Bullets items={[
            "À nos employé(e)s et aux personnes que nous aurons autorisé(e)s, par exemple des professionnel(le)s, afin de vous aider dans des domaines hors de notre champ de pratique.",
            "Aux compagnies dont nous offrons les produits et les services et à leurs employé(e)s et mandataires, pour leurs activités visant à vous fournir ou à chercher à vous fournir des produits et des services financiers, ou pour toute autre activité connexe (et en lien avec toute autre fin que vous avez autorisée).",
            "Aux tiers fournisseurs de services sélectionnés que nous aurons autorisés ; s'ils sont situés à l'étranger, vos renseignements personnels peuvent alors être assujettis aux lois applicables, y compris les lois sur l'accès à l'information des autorités publiques, d'autres pays.",
            "Aux personnes ou aux entités à qui vous y avez donné accès ou qui sont autorisées à y accéder en vertu de la loi.",
          ]} />
          <P>
            Nous avons l'obligation de conserver la plupart des renseignements que nous recueillons pour des raisons règlementaires, y compris l'exigence de démontrer que les recommandations que nous avons formulées sont appropriées et répondent à vos besoins identifiés.
          </P>
          <P>
            Conformément aux lois applicables et à votre autorisation écrite, vous avez le droit de prendre connaissance des renseignements personnels qui sont contenus dans votre dossier. À votre demande, des copies (et non des originaux) d'autres documents personnels, comme des polices d'assurance, des testaments ou des mandats (procurations), peuvent être conservées dans votre dossier.
          </P>
        </Divider>

        {/* 7. Exactitude */}
        <Divider>
          <H2 id="s7">7. Exactitude des renseignements</H2>
          <P>
            Afin de faire les recommandations appropriées, nous devons recevoir des renseignements exacts. Il nous incombe de conserver les renseignements à votre sujet aussi exacts et à jour que possible. Si la situation le permet, nous tenterons de mettre à jour vos renseignements personnels afin de déterminer si les recommandations que nous avons émises sont toujours appropriées selon l'évolution de votre situation. Par ailleurs, nous nous fions également à vous pour nous fournir des mises à jour régulières. Sur demande, vous pouvez passer en revue les renseignements personnels que nous conservons à votre sujet.
          </P>
        </Divider>

        {/* 8. Protection */}
        <Divider>
          <H2 id="s8">8. Efforts déployés afin de protéger vos renseignements personnels</H2>
          <P>
            Tous les membres du personnel, les conseiller(-ère)s associé(e)s, les agent(e)s généraux(-ales) administrateur(-trice)s et les fournisseurs qui ont accès aux dossiers des client(e)s doivent protéger ces renseignements, les garder confidentiels et les utiliser uniquement aux fins prévues. Nous avons également mis en place des mesures de protection physiques et informatiques, ainsi que d'autres processus, pour protéger les renseignements des client(e)s d'un accès non autorisé. Suivant les principes et recommandations de la LPRPDE, le personnel est tenu de signer un accord de confidentialité dès le début de l'emploi et nous nous assurons de rester conscientisé(e)s sur une base régulière par des formations et des contenus traitant de l'importance de la protection des renseignements personnels et de la cybersécurité.
          </P>
          <P>
            En annexe A, vous trouverez notre procédure en cas de manquement / brèche / atteinte à la protection de vos renseignements personnels.
          </P>
        </Divider>

        {/* 9. Durée de conservation */}
        <Divider>
          <H2 id="s9">9. Durée de conservation de vos renseignements personnels</H2>
          <P>Vos renseignements personnels seront conservés uniquement pendant :</P>
          <ol className="space-y-2 mb-5">
            {[
              "la durée nécessaire à l'accomplissement des objectifs pour lesquels ils ont été récoltés ;",
              "le temps exigé par les lois applicables aux produits ou services auxquels vous avez souscrit auprès de nous ;",
              "la durée requise pour protéger nos droits en cas de recours.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-[#78716C] font-light leading-relaxed">
                <span className="text-[#C4A35A] font-medium shrink-0">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <P>
            Afin d'obtenir davantage d'information sur la durée exacte pendant laquelle ces renseignements seront conservés, nous vous invitons à communiquer avec le Responsable de la protection des renseignements personnels, ce dernier étant identifié plus loin dans la présente Politique.
          </P>
        </Divider>

        {/* 10. Vos choix */}
        <Divider>
          <H2 id="s10">10. Vos choix en matière de renseignements personnels</H2>
          <P>
            Vous pouvez retirer votre consentement en tout temps (sous réserve de restrictions contractuelles ou légales de nous fournir un préavis raisonnable) en communiquant avec nous. Si vous retirez votre consentement, nous pourrions être dans l'impossibilité de vous fournir les produits ou les services demandés et nous pourrions devoir mettre fin à notre relation d'affaires.
          </P>
        </Divider>

        {/* 11. Porter plainte */}
        <Divider>
          <H2 id="s11">11. Votre droit de porter plainte</H2>
          <P>
            Si vous avez des préoccupations concernant la collecte, l'utilisation ou la divulgation de vos renseignements personnels, vous avez le droit de porter plainte auprès de nous ou de l'organisme fédéral ou provincial responsable de la protection de la vie privée de votre lieu de résidence :
          </P>
          <div className="mt-6 p-5 border-l-2 border-[#C4A35A] bg-[#F9F8F4]">
            <p className="text-sm font-medium text-[#1C1917] mb-3">
              Chef de la protection des renseignements personnels, chez OP Gestion Financière Stratégique :
            </p>
            <address className="not-italic space-y-1.5 text-sm text-[#78716C] font-light">
              <p className="font-medium text-[#1C1917]">Olivier Pastorel</p>
              <p>1-45 rue Rémi Dansereau<br />Beloeil, QC J3G 0N6</p>
              <p>
                <a href="tel:5144432335" className="hover:text-[#C4A35A] transition-colors">
                  514 443-2335
                </a>
              </p>
              <p>
                <a href="mailto:olivier.pastorel@opgestionprivee.ca" className="hover:text-[#C4A35A] transition-colors">
                  olivier.pastorel@opgestionprivee.ca
                </a>
              </p>
            </address>
          </div>
        </Divider>

        {/* ANNEXE A */}
        <Divider>
          <H2 id="annexeA">Annexe A — Procédure en cas de manquement | brèche | atteinte</H2>
          <P>
            Une atteinte à la protection des renseignements personnels survient lorsqu'il y a accès non autorisé à des renseignements personnels, ou collecte, utilisation ou communication non autorisée de tels renseignements. Ces activités sont dites « non autorisées » lorsqu'elles contreviennent aux lois applicables en matière de protection des renseignements personnels, telles que la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE) et la Loi 25, ou aux autres lois provinciales et fédérales en matière de protection des renseignements personnels. Certaines des atteintes les plus courantes surviennent lorsque les renseignements personnels d'un(e) consommateur(-trice), d'un(e) patient(e), d'un(e) client(e), ou d'un(e) employé(e) sont volés, perdus ou distribués par erreur. Une atteinte peut également être la conséquence d'une procédure déficiente ou d'une défaillance opérationnelle.
          </P>
          <P>
            Tel qu'il a été déterminé par la Commission d'accès à l'information du Québec (
            <a href="https://www.cai.gouv.qc.ca" target="_blank" rel="noopener noreferrer" className="text-[#C4A35A] hover:underline">
              www.cai.gouv.qc.ca
            </a>
            ), nous suivrons les sept (7) étapes suivantes en cas d'atteinte à la protection de vos renseignements personnels :
          </P>
          <Steps items={[
            'Formulaire d\'incident',
            'Évaluation préliminaire de la situation',
            'Limite de l\'atteinte à la vie privée',
            'Évaluation des risques associés à l\'atteinte',
            'Notification à l\'intention des personnes concernées',
            'Prévention',
            'Suivi',
          ]} />

          <H3>Étape 1 : Formulaire d'incident</H3>
          <P>
            Nous remplirons un formulaire de rapport d'incident et d'atteinte à la vie privée contenant toutes les informations requises par la Commission d'accès à l'information du Québec, notamment la date de l'incident, la nature des renseignements touchés, les personnes concernées, les mesures prises et les risques identifiés.
          </P>

          <H3>Étape 2 : Évaluation préliminaire de la situation</H3>
          <P>a) Définir sommairement le contexte de la perte ou du vol de renseignements personnels :</P>
          <Bullets items={[
            "Identifier les renseignements personnels touchés et leur support ;",
            "Identifier les personnes, leur nombre ainsi que le groupe de personnes (client(e)s, employé(e)s, etc.) touchées ;",
            "Établir le contexte des événements (date, heure, lieu, etc.) ;",
            "Identifier, si possible, les circonstances entourant la perte (cause, personnes susceptibles d'être impliquées dans l'incident, etc.) ;",
            "Répertorier les mesures de sécurité physiques et informatiques en place lors de l'incident.",
          ]} />
          <P>b) Informer les autorités externes concernées qui doivent être avisées de l'incident immédiatement (avant l'évaluation des risques) :</P>
          <Bullets items={[
            "Service de police (si les circonstances laissent croire à la possibilité d'un crime) ;",
            "Commission d'accès à l'information.",
          ]} />
          <P>c) Désigner une personne ou une équipe responsable de la gestion de la situation.</P>
          <P>d) Informer les intervenant(e)s concerné(e)s à l'interne : dirigeant(e)s, responsable de l'unité administrative, responsable de la protection des renseignements personnels, conseiller(-ère) juridique, direction des communications.</P>

          <H3>Étape 3 : Limite de l'atteinte à la vie privée</H3>
          <P>Prendre sans tarder des mesures adéquates pour limiter les conséquences pour les personnes concernées :</P>
          <Bullets items={[
            "Prendre des mesures afin de limiter immédiatement les conséquences en s'assurant de mettre fin à la pratique non conforme, le cas échéant ;",
            "Récupérer les dossiers physiques ou numériques, selon le cas ;",
            "Révoquer ou modifier les mots de passe ou les codes d'accès informatiques ;",
            "Contrôler les lacunes dans les systèmes de sécurité.",
          ]} />

          <H3>Étape 4 : Évaluation des risques associés à l'atteinte</H3>
          <Bullets items={[
            "Compléter une évaluation préliminaire des risques, en considérant les personnes concernées et la sensibilité des renseignements personnels en cause quant à leur nature, leur quantité, la possibilité de les combiner avec d'autres renseignements, etc. ;",
            "Déterminer le contexte de l'incident incluant la cause, les auteur(e)s connu(e)s ou probables, l'étendue de la situation et le caractère systémique ou non de la disparition ;",
            "Évaluer la possibilité que les renseignements personnels concernés fassent l'objet d'une utilisation préjudiciable ;",
            "Évaluer le caractère réversible ou non de la situation ;",
            "Évaluer l'adéquation des mesures immédiates prises pour limiter l'atteinte ;",
            "Déterminer les préjudices potentiels, notamment les possibilités d'utilisation future des renseignements par des personnes malveillantes ;",
            "Déterminer les priorités et identifier les actions à prendre.",
          ]} />

          <H3>Étape 5 : Notification à l'intention des personnes concernées</H3>
          <P>Déterminer qui doit être mis au courant de la perte ou du vol de renseignements personnels :</P>
          <Bullets items={[
            "Service de police : dans les cas où la disparition peut résulter de la commission d'un crime, le service de police doit être avisé en premier et de toutes les démarches subséquentes ;",
            "Personnes concernées : si la perte ou le vol présente un risque de préjudice, celles-ci devraient en être avisées sans tarder, afin de leur permettre de prendre les mesures pertinentes pour protéger leurs renseignements personnels ;",
            "Commission d'accès à l'information : si les personnes concernées viennent du Québec, la Commission pourrait amorcer une inspection ou une enquête ;",
            "Autres : agences de crédit, mandataire, cocontractant(e), instance gouvernementale, syndicat, ordre professionnel, etc.",
          ]} />
          <P>
            Dans la diffusion des informations, une attention particulière doit être portée afin de ne pas aggraver le préjudice que pourraient subir les personnes concernées (p. ex., minimiser la description des renseignements personnels dans les avis).
          </P>

          <H3>Étape 6 : Prévention</H3>
          <Bullets items={[
            "Approfondir l'analyse des circonstances de la perte ou du vol des renseignements personnels et effectuer une description chronologique des événements ;",
            "Répertorier et examiner les normes, politiques ou directives internes en place au moment de l'incident ;",
            "Vérifier si ces normes ont été suivies par les personnes impliquées et identifier les raisons pour lesquelles elles n'ont pas été suivies, le cas échéant ;",
            "S'il s'agit d'une erreur de procédure ou d'une défaillance opérationnelle, les consigner au dossier de sécurité et adapter les processus ;",
            "Évaluer la nécessité d'élaborer une politique en matière de traitement d'une perte ou d'un vol de renseignements personnels ;",
            "Formuler les recommandations relatives aux solutions à moyen et long termes et aux stratégies de prévention ;",
            "S'assurer de la réelle nécessité de la collecte des renseignements personnels concernés.",
          ]} />

          <H3>Étape 7 : Suivi</H3>
          <P>Il est important d'effectuer le suivi :</P>
          <Bullets items={[
            "Du processus de traitement qui doit être appliqué lors d'une perte ou d'un vol de renseignements personnels, et des résultats obtenus afin de l'améliorer, s'il y a lieu ;",
            "Des mesures de sécurité requises à la suite de l'incident et de leur performance ;",
            "De la communication de l'information pertinente à la Commission d'accès à l'information et au service de police impliqué, le cas échéant.",
          ]} />

          <H3>Tenue de dossier</H3>
          <P>
            Il est également obligatoire de tenir un registre de tous les événements d'atteinte à la protection des renseignements personnels, même si certains ne comptaient aucun risque de préjudice grave. Tout dossier d'événement doit être conservé au moins deux ans.
          </P>
          <P>Les dossiers doivent inclure, au minimum, les éléments suivants :</P>
          <Bullets items={[
            "La date ou durée estimée de l'atteinte ;",
            "Une description des circonstances de l'atteinte ;",
            "La nature des renseignements en cause dans l'atteinte ;",
            "L'existence d'un rapport au Commissariat à la protection de la vie privée ou le nom des autres organisations avisées, s'il y a lieu ;",
            "Une courte explication des raisons pour lesquelles l'organisation a déterminé qu'il n'y avait aucun risque de préjudice grave si l'atteinte n'a pas fait l'objet d'un rapport.",
          ]} />

          <div className="mt-6 p-4 bg-[#F9F8F4] border-l-2 border-[#E7E5E0]">
            <P>
              Vous trouverez des renseignements détaillés concernant toutes vos obligations ayant trait à la protection des renseignements personnels au{' '}
              <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer" className="text-[#C4A35A] hover:underline">
                www.priv.gc.ca
              </a>.
            </P>
          </div>
        </Divider>

        {/* ANNEXE B */}
        <Divider>
          <H2 id="annexeB">Annexe B — Références de la Chambre de la sécurité financière</H2>

          <H3>Code de déontologie</H3>
          <P>
            Un(e) représentant(e) doit s'assurer que les renseignements qu'il détient à propos de ses client(e)s demeurent confidentiels, à moins que certaines dispositions légales ou qu'une ordonnance d'un tribunal permettent de les divulguer. Il(elle) est également tenu(e) d'utiliser les renseignements qu'il(elle) recueille seulement aux fins pour lesquelles il(elle) les a obtenus et de ne jamais les utiliser au préjudice de son(sa) client(e).
          </P>
          <P>
            Ce sont les articles 26 et 27 du Code de déontologie de la Chambre de la sécurité financière qui prévoient ces obligations.
          </P>
          <div className="space-y-4 mb-6">
            <div className="p-4 bg-[#F9F8F4] border-l-2 border-[#C4A35A]">
              <p className="text-sm font-medium text-[#1C1917] mb-1">Article 26</p>
              <p className="text-sm text-[#78716C] font-light leading-relaxed">
                Le représentant doit respecter le secret de tous renseignements personnels qu'il obtient sur un client et les utiliser aux fins pour lesquelles il les obtient, à moins qu'une disposition d'une loi ou d'une ordonnance d'un tribunal compétent ne le relève de cette obligation.
              </p>
            </div>
            <div className="p-4 bg-[#F9F8F4] border-l-2 border-[#C4A35A]">
              <p className="text-sm font-medium text-[#1C1917] mb-1">Article 27</p>
              <p className="text-sm text-[#78716C] font-light leading-relaxed">
                Le représentant ne doit pas divulguer les renseignements personnels ou de nature confidentielle qu'il a obtenus autrement que conformément aux dispositions de la loi, ni les utiliser au préjudice de son client ou en vue d'obtenir un avantage pour lui-même ou pour une autre personne.
              </p>
            </div>
          </div>
          <P>
            Il est aussi important de souligner l'exigence de l'article 23 de la Loi sur la distribution de produits et services financiers qui prévoit qu'« un représentant doit transmettre à l'établissement auquel il est rattaché tous les renseignements qu'il recueille relativement à ses clients. [...] Il ne peut les communiquer qu'à une personne autorisée par la loi à les recevoir. »
          </P>

          <H3>Questions fréquemment posées</H3>

          <div className="space-y-6 mt-4">
            {[
              {
                q: "Les dossiers et registres tenus doivent-ils être conservés dans un classeur verrouillé ainsi que dans une pièce fermée à clé?",
                r: "La règle générale veut que les dossiers soient conservés dans un lieu sûr et sécuritaire. Ce lieu doit être facilement accessible, mais seulement par les personnes autorisées. Conserver les dossiers dans des classeurs fermés à clé dans une pièce verrouillée constitue une bonne façon de remplir ces obligations. Toutefois, toute autre méthode sûre et sécuritaire permettant d'atteindre le même objectif serait tout aussi acceptable.",
              },
              {
                q: "Qu'en est-il de la conservation des dossiers électroniques?",
                r: "En matière de dossiers électroniques, la même règle que celle des dossiers physiques s'applique : il faut s'assurer de la sûreté et de la sécurité de leur mode de conservation. L'utilisation d'un code d'accès, d'un logiciel antivirus et la protection de l'accès au réseau constituent des exemples permettant l'atteinte de ces objectifs.",
              },
              {
                q: "Doit-on posséder un classeur pour chaque type de registre ou de dossier tenu?",
                r: "Un principe essentiel en matière de conservation de dossiers veut que ceux-ci soient conservés de façon qu'ils puissent être facilement retrouvés dans un délai raisonnable. Le recours à l'utilisation d'un classeur distinct pour chaque type de dossier, jumelé à une codification adéquate, pourrait donc s'avérer efficace même si rien ne l'oblige.",
              },
              {
                q: "Dans un dossier client(e), doit-on détailler le contrat vendu, même lorsque l'on joint au dossier une copie de la proposition et l'illustration des produits vendus?",
                r: "L'important est que tous les renseignements nécessaires prévus au Règlement sur la tenue et la conservation des livres et registres se trouvent dans vos dossiers. Lorsque la copie de la proposition et l'illustration des produits vendus contiennent tous ces renseignements, rien n'exige de détailler le contrat vendu.",
              },
              {
                q: "Si un individu est le(la) seul(e) représentant(e) en assurance de personnes de son cabinet, à quelles règles doit-il(elle) se conformer?",
                r: "Selon les obligations prévues dans la Loi sur la distribution de produits et services financiers, vous devez appliquer les règles en fonction du mode d'exercice sous lequel vous exercez, tel que défini par l'Autorité des marchés financiers (AMF).",
              },
              {
                q: "Un(e) conseiller(-ère) en sécurité financière peut-il(elle) conserver une copie de toutes les propositions d'assurance soumises durant l'étude d'un dossier?",
                r: "Rien dans la loi ou dans les règlements n'interdit au(à la) représentant(e) de conserver les propositions d'assurance dans le dossier client(e), s'il s'agit de renseignements pertinents. Le Règlement sur la tenue et la conservation des livres et registres prévoit que tout autre renseignement utile et nécessaire recueilli auprès du(de la) client(e) ainsi que tout document afférent doivent être conservés au registre.",
              },
            ].map(({ q, r }, i) => (
              <div key={i} className="border-t border-[#E7E5E0] pt-5">
                <p className="text-sm font-medium text-[#1C1917] mb-2">Q : {q}</p>
                <p className="text-sm text-[#78716C] font-light leading-relaxed">R : {r}</p>
              </div>
            ))}
          </div>
        </Divider>

      </section>
    </>
  );
}