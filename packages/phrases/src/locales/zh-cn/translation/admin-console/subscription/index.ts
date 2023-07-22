import quota_item from './quota-item.js';
import quota_table from './quota-table.js';

const subscription = {
  free_plan: '免费计划',
  free_plan_description: '适用于边项目和初始 Logto 试用，无需信用卡。',
  hobby_plan: '爱好计划',
  hobby_plan_description: '适用于个人开发者或开发环境。',
  pro_plan: '专业计划',
  pro_plan_description: '适用于企业付费无忧。',
  enterprise: '企业',
  current_plan: '当前计划',
  current_plan_description:
    '这是您的当前计划。您可以查看计划使用情况，您的下一个账单，并在需要时升级到更高级别的计划。',
  plan_usage: '计划使用情况',
  plan_cycle: '计划周期：{{period}}，使用情况将于{{renewDate}}续订。',
  next_bill: '您的下一个账单',
  next_bill_hint: '要了解有关计算的更多信息，请参阅此<a>文章</a>。',
  next_bill_tip:
    '您的即将到期的账单包括下个月的计划基础价格，以及各个层级的 MAU 单价乘以使用量的费用。',
  manage_payment: '管理付款',
  overfill_quota_warning: '您已达到配额限制。为防止任何问题，请升级计划。',
  upgrade_pro: '升级专业计划',
  payment_error:
    '检测到付款问题。无法处理前一周期的{{price, number}}美元。更新付款以避免 Logto 服务中断。',
  downgrade: '降级',
  current: '当前',
  buy_now: '立即购买',
  contact_us: '联系我们',
  quota_table,
  quota_item,

  billing_history: {
    invoice_column: '发票',
    status_column: '状态',
    amount_column: '金额',
    invoice_created_date_column: '发票创建日期',
    invoice_status: {
      void: '已取消',
      paid: '已支付',
      open: '未完成',
      uncollectible: '逾期未付',
    },
  },
  downgrade_modal: {
    title: '确认要降级吗？',
    description:
      '如果您选择切换到 <targetName/>，请注意您将不再可以使用以前在 <currentName/> 中的配额和功能。',
    before: '之前：<name/>',
    after: '之后：<name />',
    downgrade: '降级',
    not_eligible: '您不符合降级条件',
    not_eligible_description: '在降级到 <name/> 之前，请确保满足以下条件。',
    a_maximum_of: '最多<item/>个',
    help_tip: '需要帮助降级？<a>联系我们</a>。',
  },
  upgrade_success: '成功升级到 <name/>',
  downgrade_success: '成功降级到 <name/>',
  subscription_check_timeout: '订阅检查超时，请稍后刷新。',
};

export default subscription;