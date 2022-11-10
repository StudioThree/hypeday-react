export default function RequiredIndicator({ required }: { required: boolean }) {
  if (!required) return null;

  return <span title="Required"> *</span>;
}
