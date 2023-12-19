import { useIndividualActor } from "../../hooks/useIndividualActor.js"
import { ActorProfile } from "./details/ActorProfile.jsx"
import { AppearOnSection } from "./details/AppearOnSection.jsx"
import { useParams } from "react-router-dom"
import '../../styles/specificActor.css'

export function ActorDetails() {
    const { id: actorId } = useParams()
    const { actorInfo, appear } = useIndividualActor(actorId)

    return (
        <>
            {(actorInfo && appear) && (
                <main className="actorProfile">
                    <ActorProfile actorInfo={actorInfo} />
                    <AppearOnSection appear={appear} />
                </main>
            )}
        </>
    )
}

