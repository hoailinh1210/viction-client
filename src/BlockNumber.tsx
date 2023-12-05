import { useBlockNumber, useWatchPendingTransactions } from 'wagmi'
 
export const BlockNumber = () =>  {
    useWatchPendingTransactions({
        listener: (hashes) => console.log('Pending transactions', hashes),
    })
    const { data = 0, isError, isLoading } = useBlockNumber()
    
    if (isLoading) return <div>Fetching block number…</div>
    if (isError) return <div>Error fetching block number</div>
    return <div>Processing block number: <a target="_blank" rel="noopener noreferrer" href={`https://testnet.tomoscan.io/block/${data.toString()}`}>{data.toString()}</a></div>
}