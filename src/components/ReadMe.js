import React, {Component} from 'react';

class ReadMe extends Component {
    render() {
        return (
            <div>
                <h3>Test React JS </h3>
                <h4>L'objectifs: </h4>
                <p>
                    L’objectif de ce test est de reproduire l’application présentée dans onglet « live demo » en
                    utilisant java script et la librairie React JS.
                    Seront jugés les points suivants :
                    <ul>
                        <li>La structure de votre projet</li>
                        <li>La qualité du code (bonne pratique, commentaire, test et structure)</li>
                        <li>Le choix des librairies</li>
                    </ul>
                    <h4>L'application: </h4>
                    <p>
                        Il s’agit d’une application de type carnet de voyage. Elle permet d’écrire des articles sur vos
                        différents voyages.
                        Les fonctionnalités sont listés ci-dessous par pages :
                        <ul>
                            <li>Sommaire :</li>
                            <ul>
                                <li>Présentation de l’ensemble des posts</li>
                                <li>Un bouton pour ajouter un nouvel article</li>
                            </ul>
                            <li>Add travel (si appui sur le bouton « add travel» depuis le sommaire)</li>
                            <ul>
                                <li>Champ pour renseigner le titre du voyage</li>
                                <li>Champ pour renseigner le pays</li>
                                <li>Champ pour renseigner la description</li>
                                <li>Validation des champs après un focus</li>
                                <ul>Si correct alors le cadre devient vert sinon il devient rouge.</ul>
                                <li>Bouton « cancel » pour annuler l’ajout d’un post.</li>
                                <li>Bouton « submit » pour enregistrer le post</li>
                                <ul>Attention : retour le sommaire après soumission des informations.</ul>
                            </ul>
                            <li>Show travel (si appui sur un post dans le sommaire)</li>
                            <ul>
                                <li>Présentation des informations suivantes :</li>
                                <ul>
                                    <li>Titre</li>
                                    <li>Pays</li>
                                    <li>Description</li>
                                </ul>
                                <li>Bouton pour revenir au sommaire.</li>
                                <li>Bouton pour supprimer le post</li>
                            </ul>
                            <li>N'hésitez pas à jouer avec la version de démo pour découvrir les fonctionnalités</li>
                        </ul>
                    </p>
                    <h4>Les régles: </h4>
                    <p>
                        Pour la réalisation du test vous êtes libre d’utiliser les librairies que vous souhaitez.
                        (ex: Vous pouvez par exemple utiliser redux ou le contexte de react)
                        Cependant, afin de vous aider, vous trouverez ci-dessous un ensemble de liens qui peuvent vous
                        aider :
                        <ul>
                            <li>Gestion du formulaire :</li>
                            <a href="https://redux-form.com/7.4.2/">https://redux-form.com/7.4.2/</a>
                            <li>Pour le style :</li>
                            <a href="https://react-bootstrap.github.io/getting-started/introduction">https://react-bootstrap.github.io/getting-started/introduction</a>
                            <li>Redux :</li>
                            <a href="https://redux.js.org/"> https://redux.js.org/</a>
                            <li>Bonne pratique React JS :</li>
                            <a href="https://airbnb.io/javascript/react/">http://airbnb.io/javascript/react/</a>
                        </ul>
                    </p>
                </p>
            </div>
        );
    }
}

export default ReadMe;
