import { useEffect } from "react"

export const UserRockList = ({ rocks, fetchRocks, deleteRock }) => {
    useEffect(() => {
        fetchRocks()
    }, [])

    const displayRocks = () => {
        if (rocks && rocks.length) {
            return rocks.map(rock => <div key={`key-${rock.id}`} className="border p-5 border-solid hover:bg-fuchsia-500 hover:text-violet-50 rounded-md border-violet-900 mt-5 bg-slate-50">
                <p>{rock.name} ({rock.type.label}) weighs {rock.weight} kg</p>
                <p>In the collection of {rock.user.first_name} {rock.user.last_name}</p>
                <button className="button rounded-md bg-red-700 text-red-100 p-3 mt-4" onClick={() => deleteRock(rock.id)}>Delete</button>
            </div>)
        }

        return <h3>Loading Rocks...</h3>
    }

    return (
        <>
            <h1 className="text-3xl">Rock List</h1>
            {displayRocks()}
        </>
    )
}
