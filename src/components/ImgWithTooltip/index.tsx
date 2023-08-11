import * as Tooltip from '@radix-ui/react-tooltip';

type ImgWithTooltipProps = {
  imgSrc: string;
  toolTipContent: React.ReactNode;
};

// trazer configuração de tema aqui pois usa portal
export function ImgWithTooltip(props: ImgWithTooltipProps): JSX.Element {
  const { imgSrc, toolTipContent } = props;
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={0}>
        <Tooltip.Trigger asChild>
          <img src={imgSrc} alt={imgSrc} />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="TooltipContent" sideOffset={5}>
            {toolTipContent}
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
