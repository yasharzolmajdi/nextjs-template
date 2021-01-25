import Text from "../components/atoms/Text";

export default function Home(): JSX.Element {
  return (
    <div>
      <div>
        <Text type="title1">Title 1</Text>
      </div>
      <div>
        <Text type="title2">Title 2</Text>
      </div>
      <div>
        <Text type="title3">Title 3</Text>
      </div>
      <div>
        <Text type="large">Large</Text>
      </div>
      <div>
        <Text type="regular">Regular</Text>
      </div>
      <div>
        <Text type="small">Small</Text>
      </div>
      <div>
        <Text type="micro1">Micro 1</Text>
      </div>
    </div>
  );
}
