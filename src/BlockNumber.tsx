import { useBlockNumber, useWatchPendingTransactions } from 'wagmi'
 
export const BlockNumber = () =>  {
    useWatchPendingTransactions({
        listener: (hashes) => console.log(hashes),
    })
    const { data = 0, isError, isLoading } = useBlockNumber();
    
    if (isLoading) return <div>Fetching block number…</div>
    if (isError) return <div>Error fetching block number</div>
    return <div>Block number: {data.toString()}</div>
}