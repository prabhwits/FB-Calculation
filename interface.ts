export default interface TreeNode {
    is_base_item: boolean;
    base_item?: {
      item_id: string;
      item_value: number;
      item_maximum_value: number;
      default_selection?: {
        min: number;
        max: number;
      };
      range: {
        lower: number;
        upper: number;
      };
    };
  
    custom_item?: {
      custom_group_id: string;
      customization_id: string;
      value: number;
      maximum_value: number;
      config: {
        min: number;
        max: number;
      };
      default_select: boolean;
    };
  
    custom_groups?: Array<string>;
  
    children?: TreeNode[];
  }
  