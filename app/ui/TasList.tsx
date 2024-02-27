export default function TagList({tags = []}){
    return (
        <ul className="tag-list">
            {tags.map((tag, index) => (
                    <li key={index} className="tag-default tag-pill tag-outline">{tag}</li>
                ))}
        </ul>
    )
}

type TagListProps = {
    tags?: string[]
}