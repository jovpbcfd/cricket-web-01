import { matches } from "@/data/match"
import MatchItem from "@/components/match-item"

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const match = matches.find((match) => match.id === id)

    return (
        <MatchItem match={match} />
    )
}