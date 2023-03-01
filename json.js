const choices = [
    { value: 4, text: 'Tout à fait' },
    { value: 3, text: 'Assez bien' },
    { value: 2, text: 'Je ne sais pas' },
    { value: 1, text: 'Un peu' },
    { value: 0, text: 'Pas du tout' },
];

const questionType = 'radiogroup';

const firstPage = {
    elements: [{
        type: 'html',
        html: 'Veuillez répondre aux questions suivantes en vous basant sur votre expérience personnelle. <br/> <br/> <b>Attention:</b> Vous aurez 15 secondes pour répondre à chaque question.'
    }, {
        type: 'text',
        name: 'username',
        title: { fr: 'Vos prénoms et nom' },
        isRequired: true,
    }, {
        type: 'text',
        name: 'email',
        title: { fr: 'Votre adresse email' },
        isRequired: true,
        validators: [{
            type: 'email',
        }],
    }],
};

const questions = [
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-1',
            title: { fr: 'J\'évangélise en me laissant guider par le Saint-Esprit au travers des rencontres ou des événements.' },
            isRequired: true,
            choices: choices,
        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-2',
            title: { fr: 'Lorsque je participe à une évangélisation, il n\'est pas rare que je sois témoin de "signes et prodiges" de Dieu dans la vie de ceux qui sont présents.' },
            isRequired: true,
            choices: choices,

        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'gagneurAmes-3',
            title: { fr: 'Lorsque je me retrouve "seul contre tous", je me sens particulièrement stimulé dans l\'évangélisation.' },
            isRequired: true,
            choices: choices,

        }]
    },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'gagneurAmes-4',
    //         title: { fr: 'Quand j\'évangélise, je suis saisi, voire enflammé, je m\'exprime avec enthousiasme.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'gagneurAmes-5',
    //         title: { fr: 'Dans l\'évangélisation, je prends du temps avec les personnes pour les écouter, échanger, relire, discuter, accompagner, etc.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'gagneurAmes-6',
    //         title: { fr: 'J’aime accueillir ceux qui viennent et participer aux temps fraternels avec eux.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'gagneurAmes-7',
    //         title: { fr: 'Je me sers des difficultés rencontrées par les gens pour leur présenter Jésus.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'gagneurAmes-8',
    //         title: { fr: 'J\'annonce le Christ sans trop tourner longtemps autour du pot.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'gagneurAmes-9',
    //         title: { fr: 'J\'annonce en priorité le pardon et la miséricorde de Dieu parce que j\'en ai été moi-même bouleversé et transformé.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'gagneurAmes-10',
    //         title: { fr: 'J’aime avoir une vision dynamique des choses.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'gagneurAmes-11',
    //         title: { fr: 'Je suis sensible à l’urgence des choses. Nous n’avons pas le temps à perdre. Il faut y aller !' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'gagneurAmes-12',
    //         title: { fr: 'Je n\'hésite pas à annoncer la Vérité dérangeante du Christ au risque d\'être incompris.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'gagneurAmes-13',
    //         title: { fr: 'J\'évangélise également pour confondre le monde, dénoncer sa tromperie et déjouer ses mensonges et ses mirages.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'gagneurAmes-14',
    //         title: { fr: 'Lors de l’évangélisation, je suis prêt à aborder des questions délicates et en débattre si nécessaire.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'gagneurAmes-15',
    //         title: { fr: 'J\'évangélise avant tout en annonçant le Salut du Christ : Jésus nous sauve et nous libère.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'gagneurAmes-16',
    //         title: { fr: 'J\'annonce la parole dans le but de conduire les gens à la repentance.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'gagneurAmes-17',
    //         title: { fr: 'Avant d\'évangéliser, j’aime persister dans la prière pour que les personnes soient gagnées à Christ.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'gagneurAmes-18',
    //         title: { fr: 'La multiplication des âmes est la première action que je privilégie.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'gagneurAmes-19',
    //         title: { fr: 'Lorsque j\'arrive sur un champ missionnaire, je veux que les âmes comprennent qu\'elles sont mon focus premier.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'gagneurAmes-20',
    //         title: { fr: 'Après m\'avoir écouté, certains me disent être frappés par ce qu\'ils ont entendu, comme stupéfaits.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'gagneurAmes-21',
    //         title: { fr: 'Je reste constamment en quête de stratégies d’évangélisation.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'gagneurAmes-22',
    //         title: { fr: 'Sur le champ missionnaire, je préfère aller évangéliser qu’animer des ateliers de formation.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'gagneurAmes-23',
    //         title: { fr: 'Pour moi, le terme conquête signifie le rassemblement de tous les assoiffés de Christ.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'gagneurAmes-24',
    //         title: { fr: 'Les temps de prière sont généralement orientés sur la réconciliation des âmes avec le Seigneur.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'gagneurAmes-25',
    //         title: { fr: 'Dans le cadre de la mission, je préfère d’abord gagner les âmes.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-1',
            title: { fr: 'Lorsque j\'évangélise, j\'aime rapporter comment Dieu a totalement changé mon histoire, pour montrer que la transformation commence par une rencontre d\'amour avec Dieu.' },
            isRequired: true,
            choices: choices,

        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-2',
            title: { fr: 'Je suis sensible à ceux qui souffrent à cause de leur péché, je désire les conduire au pardon de Dieu.' },
            isRequired: true,
            choices: choices,

        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'transformateurAmes-3',
            title: { fr: 'Je ne crains pas de témoigner de mes faiblesses que Jésus vient porter, guérir, transformer ou sauver.' },
            isRequired: true,
            choices: choices,

        }]
    },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-4',
    //         title: { fr: 'Ma communication est orientée sur la vie des âmes.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-5',
    //         title: { fr: 'J\'utilise des arguments forts, pertinents et logiques dans mon évangélisation.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-6',
    //         title: { fr: 'Je rapporte des histoires vécues ou actuelles pour montrer que l\'Evangile est vrai, que Jésus agit dans nos vies.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-7',
    //         title: { fr: 'J\'ai besoin de bien assimiler les contenus de la Foi et de la Révélation pour évangéliser.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-8',
    //         title: { fr: 'Je propose volontiers à mon entourage de m\'accompagner à des rencontres pour écouter des témoins ou des prédicateurs : le réveil de la foi s\'opère souvent dans ce type d\'occasion.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-9',
    //         title: { fr: 'Je suis sensible aux enjeux spirituels et existentiels des situations, des personnes ou des évènements auxquels je suis confronté.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-10',
    //         title: { fr: 'J\'ai besoin de temps pour expliquer et donner les raisons de croire.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-11',
    //         title: { fr: 'Je propose facilement des livres, des enregistrements ou des vidéos de témoins à mon entourage.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-12',
    //         title: { fr: 'Ceux qui m\'écoutent estiment que je suis un bon pédagogue pour expliquer le cœur de la Révélation chrétienne.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-13',
    //         title: { fr: 'Après m\'avoir entendu parler de Dieu, louer ou prier, certains me disent qu\'ils sont profondément touchés par ma joie et mon amour de Dieu. ' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-14',
    //         title: { fr: 'Je m\'appuie sur la Parole de Dieu, le témoignage des apôtres - pour évangéliser.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-15',
    //         title: { fr: 'Pour moi, le terme conquête signifie une armée de témoins qui manifeste le caractère de Christ.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-16',
    //         title: { fr: 'Je prends soin d\'établir une relation d’estime et de confiance avec les personnes, avant de leur parler clairement de Dieu.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-17',
    //         title: { fr: 'J\'aime les gens, je m\'intéresse naturellement à leur vie, ils se confient souvent. Grâce à cette relation, il y a toujours de bonnes occasions pour leur parler du Seigneur.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-18',
    //         title: { fr: 'Ma communication est orientée sur des sujets d’édification, la manifestation de la foi, la persévérance, etc.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-19',
    //         title: { fr: 'Je recherche constamment des programmes, ateliers thématiques d’édification spirituelle' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-20',
    //         title: { fr: 'Sur le champ missionnaire, l’affermissement des âmes est ma priorité. J’aime voir les âmes grandir dans le Seigneur.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-21',
    //         title: { fr: 'Lorsque j\'arrive sur un champ missionnaire, je m\'attends à ce que les âmes soient sensibles au(x) programme(s) mis en place en vue de leur édification.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-22',
    //         title: { fr: 'Sur le champ missionnaire, j’éprouve une frustration lorsque la croissance des âmes est très lente.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-23',
    //         title: { fr: 'Ma plus grande satisfaction c’est de voir les âmes guérir de leurs blessures.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-24',
    //         title: { fr: 'Je me sens à l’aise à enseigner, encourager, à animer un groupe.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-25',
    //         title: { fr: 'Les temps de prière sont généralement orientés sur la libération des âmes.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-26',
    //         title: { fr: 'Quand c\'est nécessaire, je n\'hésite pas dans ma prédication à interpeller assez vivement et "évangéliquement" ceux qui m\'écoutent.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-27',
    //         title: { fr: 'Lorsque j\'arrive sur un champ missionnaire, j\'aime que les âmes aient le même niveau d\'engagement que moi.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-28',
    //         title: { fr: 'En évangélisation, je témoigne surtout des évènements de ma propre histoire pour illustrer combien Dieu transforme une vie et conduit au bonheur.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-29',
    //         title: { fr: 'Durant une évangélisation, il n\'est pas rare que je perçoive les besoins spirituels des personnes avec qui j’ai un échange.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'transformateurAmes-30',
    //         title: { fr: 'Lorsque je raconte comment j\'ai rencontré le Christ et ce qu\'il a fait dans ma vie, les gens sont interpellés.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-1',
            title: { fr: 'Dans le cadre de la mission, je souhaite avoir des fonctions bien déterminées en vue de mettre à l’épreuve de nouvelles idées.' },
            isRequired: true,
            choices: choices,

        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-2',
            title: { fr: 'En évangélisation, j\'utilise des formules, des images et des exemples qui percutent.' },
            isRequired: true,
            choices: choices,

        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'coordinateurMission-3',
            title: { fr: 'J\'évangélise avant tout les personnes de mon entourage : collègues, amis, voisins ou famille.' },
            isRequired: true,
            choices: choices,

        }]
    },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-4',
    //         title: { fr: 'Ma manière d\'évangéliser, c\'est de me mettre au service des évangélisateurs, par la prière, le service ou l\'organisation.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-5',
    //         title: { fr: 'Je veille à ce que les choses pratiques soient bien organisées pour évangéliser : sinon je trouve que l\'on n\'est pas crédible, ni respectueux des gens.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-6',
    //         title: { fr: 'J\'aime convier mon entourage à venir participer avec moi à de belles célébrations qui présente un beau visage de l\'Eglise.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-7',
    //         title: { fr: 'Je m\'investis pour soigner \'atmosphère d\'accueil, la beauté des lieux, etc. et pour que les personnes se sentent bien et disponibles pour écouter la Parole.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-8',
    //         title: { fr: 'S\'il y a un concert d\'un groupe chrétien dans la région, j\'y invite ou j\'y emmène les jeunes de mon entourage.' },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-9',
    //         title: { fr: `Lors du passage à la maison d'un frère dans la foi ou d'un prédicateur, j'invite des amis ou des voisins à le rencontrer chez moi.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-10',
    //         title: { fr: `Plusieurs personnes ont été gagnées au Seigneur au travers de leur amitié avec moi.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-11',
    //         title: { fr: `Je me tiens au courant des nouveautés missionnaires (rassemblements, livres, témoignages, vidéo ou prédication sur Internet, etc.), puis j'essaye de voir à qui je pourrais les proposer.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-12',
    //         title: { fr: `Je m'attache à démontrer que la foi chrétienne et la Révélation apportent des réponses pertinentes aux dérives et aux besoins du monde moderne.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-13',
    //         title: { fr: `L’organisation et la planification sont des activités que j’apprécie énormément dans la mission.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-14',
    //         title: { fr: `Lorsque j'arrive sur un champ missionnaire, j'apprécie qu'il y ait une organisation déjà établie.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-15',
    //         title: { fr: `Dans le cadre de la mission, je préfère trouver des solutions face aux défis organisationnels.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-16',
    //         title: { fr: `Je me sens à l’aise dans la formulation de remarques constructives et utiles.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-17',
    //         title: { fr: `Je me sens plus à l’aise à travailler avec des concepts, des stratégies à développer.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-18',
    //         title: { fr: `Ma communication est orientée sur les objectifs à atteindre, le statut des églises, le territoire.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-19',
    //         title: { fr: `Pour moi le terme conquête signifie multiplication des églises dans une zone déterminée.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-20',
    //         title: { fr: `Les temps de prière sont généralement orientés sur la prise de territoires.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-21',
    //         title: { fr: `J’aime que la mission soit une réussite, je m’assure que toute l’organisation soit conforme à la vision du pasteur.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-22',
    //         title: { fr: `J’éprouve une frustration lorsque la dynamique d’évangélisation n’est pas suivie.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-23',
    //         title: { fr: `Le respect de l’heure, du timing est déterminant pour moi lors de nos réunions.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-24',
    //         title: { fr: `Je suis très regardant sur le bon déroulement du programme.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-25',
    //         title: { fr: `Je m’assure que le budget est respecté.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'coordinateurMission-26',
    //         title: { fr: `Je reste fortement sensible au changement et à l’innovation.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-1',
            title: { fr: `J'aime évangéliser les personnes blessées ou éloignées de Dieu pour leur annoncer Son amour et Sa compassion pour chacun.` },
            isRequired: true,
            choices: choices,

        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-2',
            title: { fr: `Je veille à ce que les non-croyants et les personnes extérieures à la communauté chrétienne soient très bien accueillies.` },
            isRequired: true,
            choices: choices,

        }]
    },
    {
        elements: [{
            type: questionType,
            name: 'manifestateurCompassion-3',
            title: { fr: `Quand je rencontre des personnes vivant le type de galères ou d'épreuves que je vivais avant de rencontrer Jésus, je leur témoigne de ce qui m'est arrivé grâce à Lui.` },
            isRequired: true,
            choices: choices,

        }]
    },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'manifestateurCompassion-4',
    //         title: { fr: `Je me reconnais bien dans la figure de la Samaritaine : après avoir rencontré et écouté Jésus, elle invite tout le village à faire de même.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'manifestateurCompassion-5',
    //         title: { fr: `Je ne peux évangéliser que si je me sens bien dans ma relation avec le Seigneur, autrement j’ai du mal.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'manifestateurCompassion-6',
    //         title: { fr: `Je suis émerveillé par la façon dont Jésus m'a conduit à Lui ; je suis poussé à le partager aux autres pour qu'ils perçoivent combien Jésus est vivant aujourd'hui.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'manifestateurCompassion-7',
    //         title: { fr: `Je suis profondément bouleversé par la détresse des hommes qui ne connaissent pas le Christ et par les mensonges de ce monde.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'manifestateurCompassion-8',
    //         title: { fr: `J'ai un caractère liant, sympathique et spontané avec les personnes inconnues ou éloignées de la communauté chrétienne.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'manifestateurCompassion-9',
    //         title: { fr: `J’aime prendre soin des âmes, les mettre à l’aise et connaitre leurs besoins.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'manifestateurCompassion-10',
    //         title: { fr: `Lorsque j'évangélise, je parle d'abord de l'immense amour de Dieu pour chacun.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'manifestateurCompassion-11',
    //         title: { fr: `Je partage aisément aux autres ma joie d'avoir participé à un évènement où se sont manifestés clairement la grâce et l'amour de Dieu.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'manifestateurCompassion-12',
    //         title: { fr: `J'annonce avant tout l'amour de Dieu afin de rejoindre le besoin de chacun d'aimer et d'être aimé.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'manifestateurCompassion-13',
    //         title: { fr: `Pour évangéliser quelqu'un, je cherche d'abord à comprendre les raisons de ses doutes, de son indifférence ou de son refus de croire.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'manifestateurCompassion-14',
    //         title: { fr: `J’ai une facilité à donner, donc je privilégie tout ce qui est lié aux actes de compassion.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'manifestateurCompassion-15',
    //         title: { fr: `Je mets l’accent sur des programmes destinés à rendre visite aux personnes en difficultés.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'manifestateurCompassion-16',
    //         title: { fr: `Je suis plus sensible à la mobilisation des ressources en vue de venir en aide aux personnes en difficulté.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'manifestateurCompassion-17',
    //         title: { fr: `Ma communication est orientée sur la communion fraternelle, les dons, les appels à l’aide.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'manifestateurCompassion-18',
    //         title: { fr: `Pour moi le terme conquête signifie manifestation massive des actes de compassion.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'manifestateurCompassion-19',
    //         title: { fr: `Les temps de prière sont généralement orientés sur la dimension du Dieu Pourvoyeur et du Dieu Amour.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'manifestateurCompassion-20',
    //         title: { fr: `Les personnes me disent qu'elles sont touchées par mon attention à elles et par les services que je leur rends.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'manifestateurCompassion-21',
    //         title: { fr: `Quand je rencontre une personne qui souffre, je m'attache à la rejoindre par des gestes d'attention, de consolation ou d'affection.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'manifestateurCompassion-22',
    //         title: { fr: `J'accepte facilement d'être dérangé pour me mettre au service et à l'écoute de ceux qui font appel à moi.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'manifestateurCompassion-23',
    //         title: { fr: `Je suis étreint par la tristesse ou l'angoisse de ceux qui ne vivent pas de la grâce de Dieu.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'manifestateurCompassion-24',
    //         title: { fr: `Je ne peux pas concevoir qu’il y ait parmi nous des personnes qui rencontrent des difficultés.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'manifestateurCompassion-25',
    //         title: { fr: `Sur le champ missionnaire, je me concentre sur les besoins des âmes.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    {
        elements: [{
            type: questionType,
            name: 'itinerant-1',
            title: { fr: `Je préfère aller sur le terrain.` },
            isRequired: true,
            choices: choices,

        }]
    },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'itinerant-2',
    //         title: { fr: `J’aime découvrir de nouveaux territoires, voyager, être sur les routes.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'itinerant-3',
    //         title: { fr: `Je privilégie le contact direct avec les âmes.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'itinerant-4',
    //         title: { fr: `Je peux partir d’un champ missionnaire vers un autre sans souci.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'itinerant-5',
    //         title: { fr: `J’aime me déplacer très souvent` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    {
        elements: [{
            type: questionType,
            name: 'sedentaire-1',
            title: { fr: `Je préfère piloter les activités à distance.` },
            isRequired: true,
            choices: choices,

        }]
    },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'sedentaire-2',
    //         title: { fr: `J’aime plutôt effectuer des tâches administratives en rapport avec la mission.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'sedentaire-3',
    //         title: { fr: `Je me sens à l’aise lorsque le contact se fait à distance.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'sedentaire-4',
    //         title: { fr: `Je préfère finir sur un champ missionnaire avant d’être déployé ailleurs.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
    // {
    //     elements: [{
    //         type: questionType,
    //         name: 'sedentaire-5',
    //         title: { fr: `J’apprécie réduit au maximum mes déplacements.` },
    //         isRequired: true,
    //         choices: choices,
    //         
    //     }]
    // },
];

shuffle(questions);

const pages = [firstPage, ...questions];

const surveyJson = {
    title: { fr: `Découvrez votre profil missionnaire` },

    showQuestionNumbers: 'off',
    showProgressBar: 'top',
    showTimerPanel: 'bottom',
    showTimerPanelMode: 'all',

    firstPageIsStarted: true,
    startSurveyText: { fr: 'Découvrir mon profil' },
    completeText: { fr: 'Terminer' },

    goNextPageAutomatic: true,
    showNavigationButtons: true,
    showPrevButton: false,

    maxTimeToFinishPage: 15,
    maxTimeToFinish: 15 * questions.length,
    pages: pages,

};

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}