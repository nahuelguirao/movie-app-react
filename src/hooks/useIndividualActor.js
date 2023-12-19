import { fetchActorInfo } from "../helpers/fetchActorInfo";
import { fetchAppearOn } from "../helpers/fetchAppearOn";
import { useEffect, useState } from "react";

export function useIndividualActor(actorId) {
    const [actorInfo, setActorInfo] = useState()
    const [appear, setAppear] = useState()

    const getActorInfo = async () => {
        const result = await fetchActorInfo(actorId)
        setActorInfo(result)
    }

    const getAppearOn = async () => {
        const result = await fetchAppearOn(actorId)
        setAppear(result)
    }

    useEffect(() => {
        getAppearOn()
    }, [actorId])

    useEffect(() => {
        getActorInfo()
    }, [actorId])

    return { actorInfo, appear }
}