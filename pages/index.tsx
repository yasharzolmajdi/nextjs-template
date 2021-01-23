import Text from "../components/atoms/Text";

export default function Home(): JSX.Element {
  return (
    <div>
      <div>
        <Text type="title1">Title 1</Text>
      </div>
      <div>
        <Text type="title2">Hello world</Text>
      </div>
      <div>
        <Text type="title3">Hello world</Text>
      </div>
      <div>
        <Text type="large">Hello world</Text>
      </div>
      <div>
        <Text type="regular">Hello world</Text>
      </div>
      <div>
        <Text type="small">Hello world</Text>
      </div>
      <div>
        <Text type="micro1">Hello world</Text>
      </div>
    </div>
  );
}
